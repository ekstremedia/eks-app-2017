<?php namespace Ekstremedia\EkstremediaNews\Controllers;

use Backend\Classes\Controller;
use BackendMenu;
use Ekstremedia\EkstremediaNews\Models\NewsCategory as EmCat;
use Flash;

class NewsCategories extends Controller
{
    public $implement = ['Backend\Behaviors\ListController','Backend\Behaviors\FormController','Backend\Behaviors\ReorderController'];
    
    public $listConfig = 'config_list.yaml';
    public $formConfig = 'config_form.yaml';
    public $reorderConfig = 'config_reorder.yaml';

    public function __construct()
    {
        parent::__construct();
        BackendMenu::setContext('Ekstremedia.EkstremediaNews', 'main-menu-item', 'side-menu-item2');
    }

    public function index_onDelete()
    {
        if (($checkedIds = post('checked')) && is_array($checkedIds) && count($checkedIds)) {

            foreach ($checkedIds as $postId) {
                if ((!$post = EmCat::find($postId)) || !$post->canEdit($this->user))
                    continue;

                $post->delete();
            }

            Flash::success('Successfully deleted those categories.');
        }

        return $this->listRefresh();
    }       
}