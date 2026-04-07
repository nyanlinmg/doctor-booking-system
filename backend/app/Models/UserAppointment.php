<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserAppointment extends Model
{
    /** @use HasFactory<\Database\Factories\UserAppointmentFactory> */
    use HasFactory;

    public function user() {
        return $this->belongsTo("App\models\User", 'user_id');
    }

    public function doctor() {
        return $this->belongsTo("App\Models\Doctors", 'doctor_id');
    }
}
