<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('degree');
            $table->integer('speciality_id');
            $table->string('password');
            $table->integer('exp');
            $table->text('about');
            $table->integer('fee');
            $table->string('phone');
            $table->string('hospital');
            $table->string('image');
            $table->integer('available');
            $table->integer('earnings')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};
