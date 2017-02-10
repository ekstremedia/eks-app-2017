<?php namespace Ekstremedia\EkstremediaNews\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateEkstremediaEkstremedianews extends Migration
{
    public function up()
    {
        Schema::create('ekstremedia_news_articles', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id')->unsigned();
            $table->string('title', 255)->nullable();
            $table->string('slug', 255);
            $table->text('excerpt')->nullable();
            $table->text('content')->nullable();
            $table->text('content_html')->nullable();
            $table->dateTime('published_at')->nullable();
            $table->smallInteger('published');
            $table->integer('user_id')->nullable()->unsigned();
            $table->timestamp('created_at');
            $table->timestamp('updated_at');
            $table->smallInteger('breaking')->nullable();
            $table->smallInteger('special')->nullable();
            $table->smallInteger('video')->nullable();
            $table->smallInteger('comments');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ekstremedia_news_articles');
    }
}
