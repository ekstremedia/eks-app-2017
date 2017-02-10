<?php namespace Cms\Controllers;
use System\Models\File;
use URL;
use Lang;
use Flash;
use Event;
use Config;
use Request;
use Response;
use DateTime;
use Exception;
use BackendMenu;
use Backend\Classes\Controller;
use Backend\Classes\WidgetManager;
use Cms\Widgets\AssetList;
use Cms\Widgets\TemplateList;
use Cms\Widgets\ComponentList;
use Cms\Classes\Page;
use Cms\Classes\Theme;
use Cms\Classes\Router;
use Cms\Classes\Layout;
use Cms\Classes\Partial;
use Cms\Classes\Content;
use Cms\Classes\CmsCompoundObject;
use Cms\Classes\ComponentManager;
use Cms\Classes\ComponentPartial;
use Ekstremedia\Gullkorn\Models\Gullkorn;

class EmController extends Controller
{
    /**
     * Constructor.
     */
    public function __construct()
    {
        parent::__construct();
    }
    public static function getAfterFilters() {return [];}
    public static function getBeforeFilters() {return [];}
    public static function getMiddleware() {return [];}
    public function callAction($method, $parameters=false) {
        return call_user_func_array(array($this, $method), $parameters);
    }
    public function test()
    {  
    	// $flight = Gullkorn::where('stemmer','>',1)->count();
    	// $flight = Gullkorn::where('stemmer','>',1)->count();
    	// App\Gallery::all()->random()->get();
// App\Gallery::orderByRaw('RAND()')->get()
    	$result = Gullkorn::where('stemmer','>=',3)->orderByRaw('RAND()')->take(100)->get();
    	$i = 0;
    	$str_arr = [];
    	foreach($result as $setning) {
    		$string = $setning->setning;
    		IF((SUBSTR($string, -1) != '.') && (SUBSTR($string, -1) != '?') && (SUBSTR($string, -1) != '!')){$string.= '.';}
    		$str_arr[] = ucfirst($string);
    		// echo ucfirst($string)." <br>";
    	}
		return response()->json($str_arr);
    }  

    public function testjson()
    {  
    	// $flight = Gullkorn::where('stemmer','>',1)->count();
    	// $flight = Gullkorn::where('stemmer','>',1)->count();
    	// App\Gallery::all()->random()->get();
// App\Gallery::orderByRaw('RAND()')->get()
    	$result = Gullkorn::where('stemmer','>=',3)->orderByRaw('RAND()')->take(50)->get();
        return response()->json($result);

		// die($flight);
    }  



}


?>