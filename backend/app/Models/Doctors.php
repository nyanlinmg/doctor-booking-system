<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctors extends Model
{
    /** @use HasFactory<\Database\Factories\DoctorsFactory> */
    use HasFactory;

    public function speciality(){
        return $this->belongsTo("App\Models\Specialities");
    }

    public function appointments() {
        return $this->hasMany("App\Models\UserAppointment", 'doctor_id');
    }

}
