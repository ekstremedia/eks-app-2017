<?php namespace Ekstremedia\EkstremediaNews\Components;

use Redirect;
use Cms\Classes\Page;
use Cms\Classes\ComponentBase;
use Ekstremedia\EkstremediaNews\Models\Article as EmArticle;

class Article extends ComponentBase
{
    /**
     * Reference to the page name for linking to posts.
     * @var int
     */
    public $maxItems;
    public function defineProperties()
    {
        return [
            'slug' => [
                'title'       => 'rainlab.blog::lang.settings.post_slug',
                'description' => 'rainlab.blog::lang.settings.post_slug_description',
                'default'     => '{{ :slug }}',
                'type'        => 'string'
            ]
            ];
        }
    
    public function componentDetails()
    {
        return [
            'name'        => 'Article',
            'description' => 'Put article on a page'
        ];
    }
    protected function slug()
    {
        return $this->property('slug');
    }    
    protected function loadPost()
    {
        $slug = $this->property('slug');
        $post = EmArticle::where('slug', $slug)->where('published', 1)->first();

        /*
         * Add a "url" helper attribute for linking to each category
         */
        if ($post && $post->categories->count()) {
            $post->categories->each(function($category){
                $category->setUrl($this->categoryPage, $this->controller);
            });
        }

        return $post;
    }


        public function onRun()
        {

        }
    }	