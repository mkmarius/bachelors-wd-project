<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatabaseController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\QuestionsJSONController;
use App\Http\Controllers\JobsJSONcontroller;
use App\Http\Controllers\AnswersController;
use App\Http\Controllers\SubjectController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DatabaseController::class, 'index']);

Route::get('/quiz-intro', function () {
    return view('quiz-intro');
});
Route::get('/programme-details', function () {
    return view('programme');
});
Route::get('/quiz', function () {
    return view('quiz');
});
Route::get('/jobs-json', [JobsJSONcontroller::class, 'index']);
Route::get('/formSubmit', [AnswersController::class, 'index']);
Route::post('/formSubmit', [AnswersController::class, 'formSubmit']);  
Route::delete('/formSubmit', [AnswersController::class, 'deleteData']);      