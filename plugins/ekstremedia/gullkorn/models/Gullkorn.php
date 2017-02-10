<?php namespace Ekstremedia\Gullkorn\Models;

use Model;

/**
 * Model
 */
class Gullkorn extends Model
{
    use \October\Rain\Database\Traits\Validation;
    
    /*
     * Disable timestamps by default.
     * Remove this line if timestamps are defined in the database table.
     */
    public $timestamps = false;

    /*
     * Validation
     */
    public $rules = [
    ];

    /**
     * @var string The database table used by the model.
     */
    public $table = 'ekstremedia_gullkorn_db';



    
}