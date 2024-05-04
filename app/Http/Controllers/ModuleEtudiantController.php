<?php

namespace App\Http\Controllers;

use App\Models\ModuleEtudiant;
use Illuminate\Http\Request;

class ModuleEtudiantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $module = ModuleEtudiant::create($request->all());
        return response()->json([
            'succes' => 'L\'etudiant est ajouté avec succés',

        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $level=ModuleEtudiant::where('module_id', $request->module_id)
        ->where('etudiant_id', $request->etudiant_id)->update(array('niveau'=>$request->level));
        return response()->json([
            'succes' => 'Votre niveau est mis à jour',
            'level'=>$request->level

        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        ModuleEtudiant::where('module_id', $request->module_id)
            ->where('etudiant_id', $request->etudiant_id)->delete();
    }
}
