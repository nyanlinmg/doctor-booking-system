<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::with('userRole')->get();
    }

    public function paginate(Request $request) {
        $users = User::paginate(10);

        return response()->json([
            'data' => $users->items(),
            'current_page' => $users->currentPage(),
            'last_page' => $users->lastPage(),
            'total' => $users->total()
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'password' => 'required|min:7',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $name = $request->name;
        $email = $request->email;
        $password = $request->password;
        $gender = $request->gender;
        $address = $request->address;
        $phone = $request->phone;
        $birthday = $request->birthday;
        $role = $request->role;
        $check_email = User::where('email', $email)->exists();

        if($check_email){
            return response()->json(['msg' => 'you already have an account '], 400);
        }

        $newUser = new User();
        $newUser->name = $name;
        $newUser->email = $email;
        $newUser->password = $password;
        $newUser->gender = $gender;
        $newUser->address = $address;
        $newUser->phone = $phone;
        $newUser->birthday = $birthday;
        $newUser->role_id = $role;

        if($request->hasFile('image')){
            $path = $request->file('image')->store('profile', 'public');
            $newUser->image = '/storage/' . $path;
        }

        $newUser->save();

        return response()->json([
            'success' => "you successfully created a new account.",
            'image_url' => $newUser->image ? url($newUser->image) : null
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);

        return response()->json([
            'user' => $user,
            'image_url' => $user->image ? $user->image : null
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $validator = validator($request->all(), [
            'password' => 'required|min:7',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->gender = $request->gender;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->birthday = $request->birthday;
        $user->password = $request->password;
        
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('profile', 'public');
            $user->image = '/storage/' . $path;
        }
        
        $user->save();
        
        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
