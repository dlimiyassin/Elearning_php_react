<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Etudiant;
use App\Models\Prof;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function connect(Request $request)
    {
        if (Admin::where('email', $request->email)
            ->where('password', $request->password)->count() > 0
        ) {
            $encadrant=Admin::where('email', $request->email)
            ->where('password', $request->password)->firstOrFail();
            return response()->json([
                'message' => 'connecté avec succés',
                'admin' => $encadrant
    
            ], 200);


        }elseif(Prof::where('email', $request->email)
        ->where('password', $request->password)->count() > 0
    ) {
        $encadrant=Prof::with('modules')->where('email', $request->email)
        ->where('password', $request->password)->firstOrFail();
        
        return response()->json([
            'message' => 'connecté avec succés',
            'prof' => $encadrant

        ], 200);


    
        }elseif(Etudiant::where('email', $request->email)
        ->where('password', $request->password)->count() > 0
    ) {
        $encadrant=Etudiant::with('modules')->where('email', $request->email)
        ->where('password', $request->password)->firstOrFail();
       
        return response()->json([
            'message' => 'connecté avec succés',
            'etudiant' => $encadrant

        ], 200);


    
        }

        return response()->json([
            'message' => 'l\'email ou le mot de passe est incorrect',  
        ]);
    }
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
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
