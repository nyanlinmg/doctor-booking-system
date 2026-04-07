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
        Schema::create('bookingslots', function (Blueprint $table) {
            $table->id();
            $table->integer('doctor_id');
            $table->string('day');
            $table->string('time1')->nullable();
            $table->string('time2')->nullable();
            $table->string('time3')->nullable();
            $table->string('time4')->nullable();
            $table->string('time5')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookingslots');
    }
};
