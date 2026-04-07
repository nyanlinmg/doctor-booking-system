<?php

namespace Database\Factories;

use App\Models\Specialities;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctors>
 */
class DoctorsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        static $counter = 1;

        return [
            'name' => 'Dr. ' . $this->faker->name(),
            'degree' => "MBBS",
            'speciality_id' => Specialities::inRandomOrder()->first()->id,
            'password' => Hash::make('password'),
            'exp' => rand(5, 10),
            'about' => $this->faker->paragraph(10),
            'fee' => $this->faker->numberBetween(30, 80),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'hospital' => 'Victoria Hospital',
            'image' => 'photo/doc' . $counter++ . '.png',
            'available' => 1
        ];
    }
}
