<?php namespace Ekstremedia\Gullkorn\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateEkstremediaGullkornDb extends Migration
{
    public function up()
    {
        Schema::create('ekstremedia_gullkorn_db', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('nick', 9);
            $table->text('setning');
            $table->integer('stemmer');
            $table->dateTime('tid');
            $table->text('hvemstemte');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('ekstremedia_gullkorn_db');
    }
}
