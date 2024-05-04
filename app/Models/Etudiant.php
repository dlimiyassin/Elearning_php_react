<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [ 'image','filiere','nom', 'prenom', 'email', 'badge', 'tele', 'password'];
    public function modules()
    {
        return $this->belongsToMany(Module::class,'module_etudiants','etudiant_id','module_id');
    }
}
