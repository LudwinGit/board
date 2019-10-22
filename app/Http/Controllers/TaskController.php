<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index(){
        //$task = Task::firstOrFail();
        $task = Task::all();
        return response()->json($task);
    }
}
