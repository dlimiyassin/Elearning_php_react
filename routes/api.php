<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\ModuleController;
use App\Http\Controllers\ModuleEtudiantController;
use App\Http\Controllers\ModuleProfController;
use App\Http\Controllers\ProfController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('Admin/connect', [AdminController::class, 'connect']);
Route::post('ModuleEtudiant/level', [ModuleController::class, 'getLevel']);
Route::post('Module/show', [ModuleController::class, 'showModule']);


Route::post('ModuleProf/delete', [ModuleProfController::class, 'delete']);
Route::post('ModuleEtudiant/delete', [ModuleEtudiantController::class, 'delete']);
Route::post('ModuleEtudiant/update', [ModuleEtudiantController::class, 'update']);


Route::apiResource('Admin', AdminController::class);
Route::apiResource('Prof', ProfController::class);
Route::apiResource('Etudiant', EtudiantController::class);
Route::apiResource('Module', ModuleController::class);
Route::apiResource('ModuleProf', ModuleProfController::class);
Route::apiResource('ModuleEtudiant', ModuleEtudiantController::class);
Route::apiResource('Cours', CoursController::class);
Route::apiResource('Test', TestController::class);



