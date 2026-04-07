<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctors;
use App\Models\User;
use App\Models\UserAppointment;
use App\Models\UserRole;
use DateTime;
use Illuminate\Http\Request;

class userAppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserAppointment::with('user','doctor')->get();
    }

    public function getLatestAppointments()
    {
        $appointments = UserAppointment::with('doctor', 'user')
            ->orderBy('created_at', 'DESC')
            ->limit(5)
            ->get();
        
        return response()->json($appointments);
    }

    public function getDocLatestAppointments($id) {
        $appointments = UserAppointment::where('doctor_id', $id)->with('user', 'doctor')
        ->orderBy('created_at', 'DESC')
        ->limit(5)
        ->get();

        return response()->json([
            'data' => $appointments
        ],200);
    }

    public function user($id) {
        $totalPatients = UserAppointment::where('doctor_id', $id)->with('user', 'doctor')->distinct('user_id')->count('user_id');

        return response()->json([
            'user' => $totalPatients
        ], 200);
    }

    public function doc_appointments($id) {
        $appointments = UserAppointment::with('user', 'doctor')->where('doctor_id', $id)->get();

        return response()->json([
            'data' => $appointments
        ], 200);
    }

    public function action($id, Request $request) {
        $appointment = UserAppointment::find($id);

        $appointment->action = $request->action;

        $appointment->save();

        return response()->json([
            'message' => 'success'
        ], 200);
    }

    public function payment($id, Request $request) {
        $appointment = UserAppointment::find($id);

        $appointment->payment = $request->payment;

        $appointment->save();

        return response()->json([
            'message' => 'success'
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $new_appointment = new UserAppointment();
       $new_appointment->user_id = $request->user_id;
       $new_appointment->doctor_id = $request->doc_id;
       $new_appointment->day = $request->day;
       $new_appointment->date = $request->date;
       $new_appointment->time = $request->time;
       $new_appointment->month = $request->month;
       $new_appointment->year = $request->year;

       $new_appointment->save();

       return response()->json([
            'new_appointment' => $new_appointment,
            'success' => 'true'
       ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $check_user = UserAppointment::where('user_id', $id)->exists();

        if(!$check_user){
            return response()->json(['no_data' => "No appointments..!!!"]);
        }else{
            $get_data = UserAppointment::where('user_id', $id)->with('doctor','user', 'doctor.speciality')->get();

            return response()->json(['data' => $get_data]);
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserAppointment $userAppointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $del = UserAppointment::find($id);
        $del->delete();

        return response()->json([
            'del_data' => $del
        ]);
    }

    public function deleteOldAppointments()
    {
        $delete_data = UserAppointment::whereRaw("STR_TO_DATE(CONCAT(year, '-', month, '-', date), '%Y-%b-%d') < CURDATE()")->delete();

        return response()->json(
            [
                'success' => 'true',
                'deleted data' => $delete_data
            ]
        );
    }
}