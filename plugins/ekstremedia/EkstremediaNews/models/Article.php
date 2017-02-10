<?php namespace Ekstremedia\EkstremediaNews\Models;

use BackendAuth;
use Model;
use Backend\Models\User;
use Str;
use Html;
use App;
use Markdown;
use Carbon\Carbon;
use DB;
use Flash;
use System\Models\File;
/**
 * Model
 */
class Article extends Model
{
    /*
     * Validation
     */
    public $rules = [
           'slug' => 'required'
 ];

    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    //public $timestamps = false;
    protected $dates = ['published_at'];
    protected $fillable = ['title', 'slug', 'user_id', 'excerpt', 'content', 'content_html','published_at','published','created_at','updated_at','breaking','special','video', 'comments'];
    /**
     * @var string The database table used by the model.
     */
    public $table = 'ekstremedia_news_articles';

    public $attachMany = [
        'featured_images' => ['System\Models\File', 'order' => 'sort_order'],
        'content_images' => ['System\Models\File'],
        'thumbnail'         => ['System\Models\File'],
    ];    
    public $belongsTo = [
        'user' => ['Backend\Models\User']
    ];  

    public $belongsToMany = [
        'categories' => [
            'Ekstremedia\EkstremediaNews\Models\NewsCategory',
            'table' => 'ekstremedia_news_article_category',
            'key' => 'article_id',
            'otherKey' => 'category_id',
            'order' => 'title',
            'name' => 'title',
            'placeholder' => 'title'

        ]
    ];    
    public static $allowedSortingOptions = array(
        'title asc' => 'Title (ascending)',
        'title desc' => 'Title (descending)',
        'created_at asc' => 'Created (ascending)',
        'created_at desc' => 'Created (descending)',
        'updated_at asc' => 'Updated (ascending)',
        'updated_at desc' => 'Updated (descending)',
        'published_at asc' => 'Published (ascending)',
        'published_at desc' => 'Published (descending)',
        'random' => 'Random'
    );    
   public function beforeSave()
    {
        $this->content_html = self::formatHtml($this->content);
        $user = BackendAuth::getUser();
        $this->user_id = $user->id;
    }
   public function test()
    {
        return json_encode("tet");
    }
    public function canEdit(User $user)
    {
        return ($this->user_id == $user->id) || $user->hasAnyAccess(['ekstremedia.news.articles.delete']);
    }    

    public static function formatHtml($input, $preview = false)
    {
        $result = Markdown::parse(trim($input));

        if ($preview) {
            $result = str_replace('<pre>', '<pre class="prettyprint">', $result);
        }

      //  $result = TagProcessor::instance()->processTags($result, $preview);

        return $result;
    }
    public function scopeFilterCategories($query, $categories)
    {
        return $query->whereHas('categories', function($q) use ($categories) {
            $q->whereIn('id', $categories);
        });
    }
    public function scopeIsPublished($query)
    {
        return $query
            ->whereNotNull('published')
            ->where('published', true)
            ->whereNotNull('published_at')
            ->where('published_at', '<', Carbon::now())
        ;
    }
    public static function allposts()
        {
            $alleposter = Article::orderBy('created_at', 'desc')->where('published', 1)->take(7)->get();
            return $alleposter;
        }   
   public function scopeListFrontEnd($query, $options)
    {
        /*
         * Default options
         */
        extract(array_merge([
            'page'       => 1,
            'perPage'    => 30,
            'sort'       => 'created_at',
            'categories' => null,
            'category'   => null,
            'search'     => '',
            'published'  => true
        ], $options));

        $searchableFields = ['title', 'slug', 'excerpt', 'content'];

        if ($published) {
            $query->isPublished();
        }

        /*
         * Sorting
         */
        if (!is_array($sort)) {
            $sort = [$sort];
        }

        foreach ($sort as $_sort) {

            if (in_array($_sort, array_keys(self::$allowedSortingOptions))) {
                $parts = explode(' ', $_sort);
                if (count($parts) < 2) {
                    array_push($parts, 'desc');
                }
                list($sortField, $sortDirection) = $parts;
                if ($sortField == 'random') {
                    $sortField = DB::raw('RAND()');
                }
                $query->orderBy($sortField, $sortDirection);
            }
        }

        /*
         * Search
         */
        $search = trim($search);
        if (strlen($search)) {
            $query->searchWhere($search, $searchableFields);
        }

        /*
         * Categories
         */
        if ($categories !== null) {
            if (!is_array($categories)) $categories = [$categories];
            $query->whereHas('categories', function($q) use ($categories) {
                $q->whereIn('id', $categories);
            });
        }

        /*
         * Category, including children
         */
        if ($category !== null) {
            $category = Category::find($category);

            $categories = $category->getAllChildrenAndSelf()->lists('id');
            $query->whereHas('categories', function($q) use ($categories) {
                $q->whereIn('id', $categories);
            });
        }

        return $query->paginate($perPage, $page);
    }


    //
    // Summary / Excerpt
    //
    public function scopeWithimage($query)
    {
        return $query->whereNotNull('image');
    }
    /**
     * Used by "has_summary", returns true if this post uses a summary (more tag)
     * @return boolean
     */
    public function getHasSummaryAttribute()
    {
        return strlen($this->getSummaryAttribute()) < strlen($this->content_html);
    }

    /**
     * Used by "summary", if no excerpt is provided, generate one from the content.
     * Returns the HTML content before the <!-- more --> tag or a limited 600
     * character version.
     *
     * @return string
     */
    public function getSummaryAttribute()
    {
        $excerpt = array_get($this->attributes, 'excerpt');
        if (strlen(trim($excerpt))) {
            return $excerpt;
        }

        $more = '<!-- more -->';
        if (strpos($this->content_html, $more) !== false) {
            $parts = explode($more, $this->content_html);
            return array_get($parts, 0);
        }

        return Str::limit(Html::strip($this->content_html), 600);
    }
}