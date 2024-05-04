<?php

namespace App\Http\Controllers;

use App\Models\Cours;
use App\Models\Module;
use App\Models\ModuleEtudiant;
use App\Models\Test;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $module = Module::with('profs', 'etudiants')->get();
        return $module->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Module = Module::create($request->all());
        $Module->load('profs');
        $Module->load('etudiants');
        
        return response()->json([
            'succes' => 'Le module est ajouté avec succés',
            'Module' => $Module

        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Module $Module)
    {
     $Module->load('tests');
     $Module->load('cours');
     return $Module;

        
    }
    public function showModule(Request $request)
    {
        $level = $request->level;

        $test = Test::where('module_id', $request->id)
            ->where('niveau', $level)
            -> get();

        $cours = Cours::where('module_id', $request->id)
            ->where('niveau', $level)
            -> get();
            return response()->json([
                
                'tests' => $test,
                'cours' => $cours,
            ], 200);

        
    }
    public function getLevel(Request $request)
    {
        $level = ModuleEtudiant::where('module_id', $request->module_id)
            ->where('etudiant_id', $request->etudiant_id)->firstOrFail();
        return response()->json([

            'level' => $level

        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Module $Module)
    {
        if ($Module->update($request->all())) {
            return response()->json([
                'message' => 'les informations sont actualisées avec succés',
                'Module' => $Module
            ], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Module $Module)
    {
        $Module->delete();
    }
}
