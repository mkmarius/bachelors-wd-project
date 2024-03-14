<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JobsJSONcontroller extends Controller
{
    public function index()
    {
        $jobs = DB::select('select * from jobs');
        return view('/jobs-json', ['jobs' => $jobs]);
    }
}
