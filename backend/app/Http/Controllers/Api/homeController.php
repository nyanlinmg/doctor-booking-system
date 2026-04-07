<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctors;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class homeController extends Controller
{

    public function index()
    {
        $doctors = Doctors::with('speciality', 'appointments')->get();
        return $doctors;
    }

    
    public function paginate(Request $request) {
        $doctors = Doctors::with('speciality')->paginate(8);

        return response()->json([
            'data' => $doctors->items(),
            'total' => $doctors->total()
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'password' => 'required|min:7'
        ]);

        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $check_email = Doctors::where('email', $request->email)->exists();

        if($check_email) {
            return response()->json([
                'msg' => 'This doctor already has an account'
            ], 400);
        }

        $newDoc = new Doctors();
        $newDoc->name = $request->name;
        $newDoc->email = $request->email;
        $newDoc->degree = $request->degree;
        $newDoc->speciality_id = $request->speciality;
        $newDoc->password = Hash::make($request->password);
        $newDoc->exp = $request->exp;
        $newDoc->fee = $request->fees;
        $newDoc->about = $request->about;
        $newDoc->phone = $request->phone;
        $newDoc->hospital = $request->hospital;
        $newDoc->available = $request->available;

        if($request->hasFile('image')){
            $path = $request->file('image')->store('profile', 'public');
            $newDoc->image = '/storage/' . $path;
        }

        $newDoc->save();

        return response()->json([
            'success' => true,
            'doc' => $newDoc
        ]);

    }

    public function show($id)
    {
        $data =  Doctors::find($id);

        if(!$data){
            return response()->json(['message' => "doctor is not found"], 404);
        }

        return $data->load('speciality', 'appointments');
    }

    public function earnings($id, Request $request) {
        $doc = Doctors::find($id);

        $currentEarnings = $doc->earnings ?? 0;
        $total = $currentEarnings + $request->amount;
        $doc->earnings = $total;

        $doc->save();

        return response()->json([
            'message' => 'success'
        ], 200);
        
    }

    public function available(Request $request, $id){

        $doc = Doctors::find($id);

        $doc->available = $request->available;

        $doc->save();

        return response()->json([
            'success' => true,
            'doc' => $doc
        ]);
    }

    public function update(Request $request, $id)
    {
        $doc = Doctors::find($id);

        $validator = validator($request->all(), [
            'password' => 'required|min:7',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        $doc->name = $request->name;
        $doc->email = $request->email;
        $doc->degree = $request->degree;
        $doc->speciality_id = $request->speciality;
        $doc->password = Hash::make($request->password);
        $doc->exp = $request->exp;
        $doc->fee = $request->fees;
        $doc->about = $request->about;
        $doc->phone = $request->phone;
        $doc->hospital = $request->hospital;
        $doc->available = $request->available;

        if($request->hasFile('image')){
            $path = $request->file('image')->store('profile', 'public');
            $doc->image = '/storage/' . $path;
        }

        $doc->save();

        return response()->json([
            'success' => true,
            'doc' => $doc
        ]);

    }

    public function destroy(Doctors $doctors, $id)
    {
        $data = $doctors::find($id);
        $data->delete();
        return response()->json(['delete' => 'successfully deleted...'], 200);
    }

    public function related_doctors($id){
        $data = Doctors::where('speciality_id', $id)->with('speciality')->get();
        return response()->json($data);
    }
}
