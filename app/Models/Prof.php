<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prof extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [ 'image','filiere','nom', 'prenom', 'email', 'badge', 'tele', 'password'];
    public function modules()
    {
        return $this->belongsToMany(Module::class,'module_profs','prof_id','module_id');
    }

}
