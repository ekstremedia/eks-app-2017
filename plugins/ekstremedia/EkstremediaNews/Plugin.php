<?php namespace Ekstremedia\EkstremediaNews;

use System\Classes\PluginBase;
use Ekstremedia\EkstremediaNews\Models\NewsCategory;
use Ekstremedia\EkstremediaNews\Models\Article;
use Backend;
use Controller;


class Plugin extends PluginBase
{

     public function pluginDetails()
    {
        // die("test");
        return [
            'name'        => 'EM News',
            'description' => 'Article and news editor',
            'author'      => 'ekstremedia.store::lang.em.author',
            'icon'        => 'icon-shopping-cart',
            'homepage'    => 'http://ekstremedia.no'
        ];
    }

    public function registerComponents()
    {
    	return [
          'Ekstremedia\EkstremediaNews\Components\Articles' => 'articles',
          'Ekstremedia\EkstremediaNews\Components\Article' => 'article'
          ];
    }

    public function registerSettings()
    {

    }
}
