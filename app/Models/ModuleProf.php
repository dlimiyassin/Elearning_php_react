<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ModuleProf extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [ 'module_id','prof_id'];
}
