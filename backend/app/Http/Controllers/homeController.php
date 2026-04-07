<?php

namespace App\Http\Controllers;

use App\Models\Doctors;
use Illuminate\Http\Request;

class homeController extends Controller
{
    public function index() {

        $data = Doctors::all();

        return view('home.index', [
            'data' => $data
        ]);
    }
}
