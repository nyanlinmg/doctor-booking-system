<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookingslot extends Model
{
    /** @use HasFactory<\Database\Factories\BookingslotFactory> */
    use HasFactory;

    public function doctor() {
        return $this->belongsTo("App\Models\Doctors", 'doctor_id');
    }
}
