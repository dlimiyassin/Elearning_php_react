<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;
    protected $fillable = [ 'question','reponse','reponse2','reponse3','reponse4','niveau','correct','module_id'];
    public $timestamps = false;
}
