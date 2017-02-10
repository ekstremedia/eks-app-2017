<?php namespace Ekstremedia\EkstremediaNews\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableUpdateEkstremediaEkstremedianewsArticleCategory extends Migration
{
    public function up()
    {
        Schema::create('ekstremedia_news_article_category', function($table)
        {
            $table->engine = 'InnoDB';
            $table->integer('article_id')->unsigned();
            $table->integer('category_id')->unsigned();      
              });
    }
    
    public function down()
    {
        Schema::table('ekstremedia_news_article_category', function($table)
        {
        });
    }
}
