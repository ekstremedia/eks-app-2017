<?php namespace Ekstremedia\EkstremediaNews\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Ekstremedia\EkstremediaNews\Models\Article as EmArticle;

class Articles extends ComponentBase
{
    /**
     * Reference to the page name for linking to posts.
     * @var int
     */
    public $maxItems;
    public $sortOrder;

    public function componentDetails()
    {
        return [
            'name'        => 'Article List',
            'description' => 'Put articles on a page'
        ];
    }
    
    public function defineProperties()
    {
        return [
            'maxItems' => [
                 'title'             => 'Max items',
                 'description'       => 'The most amount of todo items allowed',
                 'default'           => 3,
                 'type'              => 'string',
                 'validationPattern' => '^[0-9]+$',
                 'validationMessage' => 'The Max Items property can contain only numeric symbols'
            ],
            'pageNumber' => [
                'title'       => 'rainlab.blog::lang.settings.posts_pagination',
                'description' => 'rainlab.blog::lang.settings.posts_pagination_description',
                'type'        => 'string',
                'default'     => '{{ :page }}',
            ],
            'categoryFilter' => [
                'title'       => 'rainlab.blog::lang.settings.posts_filter',
                'description' => 'rainlab.blog::lang.settings.posts_filter_description',
                'type'        => 'string',
                'default'     => ''
            ],
            'postsPerPage' => [
                'title'             => 'rainlab.blog::lang.settings.posts_per_page',
                'type'              => 'string',
                'validationPattern' => '^[0-9]+$',
                'validationMessage' => 'rainlab.blog::lang.settings.posts_per_page_validation',
                'default'           => '10',
            ],
            'noPostsMessage' => [
                'title'        => 'rainlab.blog::lang.settings.posts_no_posts',
                'description'  => 'rainlab.blog::lang.settings.posts_no_posts_description',
                'type'         => 'string',
                'default'      => 'No posts found',
                'showExternalParam' => false
            ],
            'sortOrder' => [
                'title'       => 'rainlab.blog::lang.settings.posts_order',
                'description' => 'rainlab.blog::lang.settings.posts_order_description',
                'type'        => 'dropdown',
                'default'     => 'published_at desc'
            ],            
        ];
    }
    public function posts()
        {
            $alleposter = EmArticle::orderBy('created_at', 'desc')->where('published', 1)->take($this->property('maxItems'))->get();
            return $alleposter;
        }
        public function onRun()
        {

        }
    public function getSortOrderOptions()
    {
        return EmArticle::$allowedSortingOptions;
    }        
    }	