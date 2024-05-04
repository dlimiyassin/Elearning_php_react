<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModuleEtudiant extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [ 'module_id','etudiant_id','niveau'];
}
