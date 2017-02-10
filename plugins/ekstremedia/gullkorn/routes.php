<?php
Route::get('test', [
    'uses' => 'Cms\Controllers\EmController@test'
]);
Route::get('testjson', [
    'uses' => 'Cms\Controllers\EmController@testjson'
]);

// Route::get('test', [
//     'uses' => 'Cms\Controllers\EmController@getArtsSok'
// ]);
?>