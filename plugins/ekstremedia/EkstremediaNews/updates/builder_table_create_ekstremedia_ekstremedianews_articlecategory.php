<?php namespace Ekstremedia\EkstremediaNews\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateEkstremediaEkstremedianewsArticlecategory extends Migration
{
    public function up()
    {
        Schema::create('ekstremedia_news_category', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 100);
            $table->text('description')->nullable();
            $table->string('icon', 255)->nullable();
            $table->integer('user_id')->nullable()->unsigned();
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->string('slug', 255)->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ekstremedia_news_category');
    }
}
