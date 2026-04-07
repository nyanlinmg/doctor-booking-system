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
        Schema::create('user_appointments', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->integer('doctor_id');
            $table->string('day');
            $table->string('date');
            $table->string('time');
            $table->string('month');
            $table->string('year');
            $table->integer('action')->nullable();
            // $table->integer('payment')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_appointments');
    }
};
