<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEtudiantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('etudiants', function (Blueprint $table) {
            $table->id();
            $table->longText('image')->nullable();

            $table->string('nom', 30);
            $table->string('prenom', 30);
            $table->string('email', 50)->unique();
            $table->string('badge', 30);
            $table->string('tele', 30);
            $table->string('filiere', 30);

            
            $table->string('password', 30);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('etudiants');
    }
}
