<?php

namespace Database\Seeders;

use App\Models\BookingSlot;
use App\Models\Doctors;
use App\Models\Specialities;
use App\Models\User;
use App\Models\UserRole;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $list = ['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatricians', 'Neurologist', 'Gastroenterologist'];
        foreach($list as $name) {
            Specialities::create(['name' => $name]);
        }

        $role = ['user', 'admin'];

        for($i = 0; $i < count($role); $i++){
            UserRole::factory()->create([
                'name' => $role[$i]
            ]);
        }

        User::factory()->create([
            'name' => 'alice',
            'email' => 'alice@example.com',
        ]);

        User::factory()->count(10)->create();

        // Doctors::factory()->count(15)->create();
    }
}
