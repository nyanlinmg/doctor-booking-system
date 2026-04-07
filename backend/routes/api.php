<?php

use App\Http\Controllers\Api\bookingSlotController;
use App\Http\Controllers\Api\homeController;
use App\Http\Controllers\Api\userAppointmentController;
use App\Http\Controllers\Api\userController;
use App\Models\Doctors;
use App\Models\User;
use App\Models\UserAppointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/home', [homeController::class, 'index']);
Route::get('/home/{id}', [homeController::class, 'show']);
Route::post('/home', [homeController::class , 'store']);
Route::put('/home/{id}', [homeController::class, 'update']);
Route::get('/paginateDoc', [homeController::class, 'paginate']);
Route::put('/change_available/{id}', [homeController::class, 'available']);
Route::put('/change_earnings/{id}', [homeController::class, 'earnings']);

// Protected routes - require authentication  
Route::middleware('auth:sanctum')->group(function () {
    Route::delete('/home/{id}', [homeController::class, 'destroy']);
});

Route::apiResource('/bookingSlot', bookingSlotController::class);

Route::get('/getSchedule/{id}/{day}', [bookingSlotController::class, 'getSchedules']);

Route::apiResource('/make', userAppointmentController::class);

Route::get('/create', [userController::class, 'index']);
Route::get('/create/{id}', [userController::class, 'show']);
Route::post('/create', [userController::class, 'store']);
Route::put('/create/{id}', [userController::class, 'update']);

Route::get('/paginateUser', [userController::class, 'paginate']);

Route::get('/related_doctors/{id}', [homeController::class, 'related_doctors']);

Route::get('/getLatestAppointments', [userAppointmentController::class, 'getLatestAppointments']);

Route::delete('/delOldAppointments', [userAppointmentController::class, 'deleteOldAppointments']);

Route::get('/doc_appointments/{id}', [userAppointmentController::class, 'doc_appointments']);

Route::put('/make_action/{id}', [userAppointmentController::class, 'action']);

Route::put('/change_payment/{id}', [userAppointmentController::class, 'payment']);
Route::get('/get_user/{id}', [userAppointmentController::class, 'user']);
Route::get('/latest_appointments/{id}', [userAppointmentController::class, 'getDocLatestAppointments']);

Route::post('/doctor_login', function(Request $request){
    try {

        $email = $request->email;
        $password = $request->password;

        $validator = validator($request->all(),[
            'email' => 'required',
            'password' => 'required|min:7'
        ]);

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ],422);
        }

        $check_doctor = Doctors::where("email", $email)->first();

        if(!$check_doctor) {
            return response()->json(['email_failed' => "check email (doctor not found)"], 401);
        }

        if(!Hash::check($password, $check_doctor->password)){
            return response()->json(['pwd_failed' => 'password is unvalid'], 401);
        }

        return response()->json([
            'doctor' => $check_doctor,
            'success' => true
        ], 200);


    }catch(\Exception $error){
        return response()->json(['error' => $error->getMessage()], 500);
    }
});

Route::post('/login', function(Request $request){
    try{
        $email = $request->email;
        $password = $request->password;

        $validator = validator($request->all(), [
            'email' => 'required',
            'password' => 'required|min:7'
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => $validator->errors()
            ],422);
        }

        $check_user = User::where("email",$email)->first();

        if(!$check_user){
            return response()->json(['msg' => 'user not found (check email...!!!)'],401);
        }

        if(!Hash::check($password, $check_user->password)){
            return response()->json(['msg' => 'password is unvalid'], 401);
        }

        $token = $check_user->createToken("api")->plainTextToken;

        return response()->json([
            'token' => $token,
            'token_type' => 'Bearer',
            'user' => $check_user,
            'success' => true,
            'image_url' => $check_user->image ? url( $check_user->image) : null
        ], 200);

    }catch(\Exception $error){
        return response()->json(['error' => $error->getMessage()],500);
    }
});

Route::post('/admin_login', function(Request $request){
    try{

        $email = $request->email;
        $password = $request->password;

        $validator = validator($request->all(), [
            'email' => 'required',
            'password' => 'required|min:7'
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => $validator->errors()
            ],422);
        }

        $check_admin = User::where("email", $email)->first();

        if(!$check_admin){
            return response()->json(['email_failed' => 'check email (user not found)'],401);
        }

        if(!Hash::check($password, $check_admin->password)){
            return response()->json(['pwd_failed' => 'password is unvalid'], 401);
        }

        if($check_admin->role_id == 1){
            return response()->json(['login_failed' => "You are not admin (login failed)"],401);
        }

        return response()->json([
            'admin' => $check_admin,
            'success' => true
        ], 200);

    }catch(\Exception $error){
        return response()->json(['error' => $error->getMessage()],500);
    }
});