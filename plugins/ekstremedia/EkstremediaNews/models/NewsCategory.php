<?php namespace Ekstremedia\EkstremediaNews\Models;

use Model;
use Backend\Models\User;
use Str;
use Html;
use Lang;
use App;
use Markdown;
use Carbon\Carbon;
use DB;
use Flash;
/**
 * Model
 */
class NewsCategory extends Model
{
    use \October\Rain\Database\Traits\Validation;

    /*
     * Validation
     */
    public $rules = [
        'title' => 'required|max:255',
        'slug' => 'required|unique:ekstremedia_news_category|max:255'
            ];

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ekstremedia_news_category';


   public $belongsTo = [
        'user' => ['Backend\Models\User']
    ];
    public $belongsToMany = [
            'items' => ['Ekstremedia\EkstremediaNews\Models\Article',
            'table' => 'ekstremedia_news_article_category']
    ];

    public function afterDelete()
    {
        $this->items()->detach();
    }

    public function getPostCountAttribute()
    {
        return $this->items()->count();
    }
    public static function formatHtml($input, $preview = false)
    {
        $result = Markdown::parse(trim($input));

        if ($preview) {
            $result = str_replace('<pre>', '<pre class="prettyprint">', $result);
        }

        $result = TagProcessor::instance()->processTags($result, $preview);

        return $result;
    }
    public function canEdit(User $user)
    {
        return ($this->user_id == $user->id) || $user->hasAnyAccess(['ekstremedia.store.category.delete']);
    }


}