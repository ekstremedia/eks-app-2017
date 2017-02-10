<?php namespace Ekstremedia\EkstremediaNews\Controllers;

use Backend\Classes\Controller;
use BackendMenu;
use Ekstremedia\EkstremediaNews\Models\Article as EmArticles;
use Flash;


class Articles extends Controller
{
    public $implement = ['Backend\Behaviors\ListController','Backend\Behaviors\FormController','Backend\Behaviors\ReorderController'];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Ekstremedia.EkstremediaNews', 'main-menu-item');
    }
    public function index()
    {
        $this->vars['postsTotal'] = EmArticles::count();
        $this->vars['postsPublished'] = EmArticles::where('published','=','1')->count();
        $this->vars['postsDrafts'] = $this->vars['postsTotal'] - $this->vars['postsPublished'];

        $this->asExtension('ListController')->index();
    }        

    public function index_onDelete()
    {
        if (($checkedIds = post('checked')) && is_array($checkedIds) && count($checkedIds)) {

            foreach ($checkedIds as $postId) {
                if ((!$post = EmArticles::find($postId)) || !$post->canEdit($this->user))
                    continue;

                $post->delete();
            }

            Flash::success('Successfully deleted those posts.');
        }

        return $this->listRefresh();
    }     

     
}