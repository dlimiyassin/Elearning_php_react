<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->id();
            $table->longText('question')->nullable();
            $table->longText('reponse')->nullable();
            $table->longText('reponse2')->nullable();
            $table->longText('reponse3')->nullable();
            $table->longText('reponse4')->nullable();
            $table->longText('correct')->nullable();


            $table->integer('niveau')->nullable();
   
            $table->foreignId('module_id')->constrained('modules')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
}
