<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [ 'intitule','filiere'];
    public function cours()
    {
        return $this->hasMany(Cours::class);
    }
    public function tests()
    {
        return $this->hasMany(Test::class);
    }
    public function profs()
    {
        return $this->belongsToMany(Prof::class,'module_profs','module_id','prof_id');
    }
    public function etudiants()
    {
        return $this->belongsToMany(Etudiant::class,'module_etudiants','module_id','etudiant_id');
    }
    
}
