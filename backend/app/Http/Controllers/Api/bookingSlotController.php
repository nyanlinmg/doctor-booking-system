<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Bookingslot;
use Illuminate\Http\Request;

class bookingSlotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Bookingslot::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $schedules = $request->schedules; // array of 7 days

        foreach($schedules as $schedule) {
            $slot = new Bookingslot();
            $slot->doctor_id = $request->doc_id;
            $slot->day = $schedule['day'];
            $slot->time1 = $schedule['time1'];
            $slot->time2 = $schedule['time2'];
            $slot->time3 = $schedule['time3'];
            $slot->save();
        }

        return response()->json(['success' => 'true'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        // $schedules = Bookingslot::where('doctor_id', $id)->with('doctor')->get();

        // foreach($schedules as $schedule){
        //     if($schedule->day == "Monday"){
        //         return $schedule;
        //     }
        // }
    }

    public function getSchedules($id, $day){
        $schedules = Bookingslot::where('doctor_id', $id)->where('day', $day)->with('doctor')->get();

        return $schedules;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bookingslot $bookingslot)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bookingslot $bookingslot)
    {
        //
    }
}
