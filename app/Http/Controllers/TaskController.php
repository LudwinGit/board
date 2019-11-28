<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Integer;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();

        foreach ($tasks as $task) {
            $nombre = DB::selectOne("select EMPLEADO from USUARIO where USUARIO = 'IF009'");
            $task->usuario = $nombre->EMPLEADO;
        }

        return response()->json($tasks);
    }

    public function show($division)
    {
        $tasks = Task::where('departamento',(int)$division)->get();
        foreach ($tasks as $task) {
            $nombre = DB::selectOne("select EMPLEADO from USUARIO where USUARIO = '".$task->usuario_crea."'");
            $task->usuario = $nombre->EMPLEADO;
        }
        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        $task = new Task;
        $task->nombre = $request->name;
        $task->descripcion = $request->description;
        $task->usuario_crea = $request->user;
        $task->departamento = (string)$request->departament;
        $task->save();
        return response()->json($request);
    }

    public function update(Request $request, $task)
    {
        $task_ = Task::find($task);

        if ($request->avance == 1) {
            if ($request->estado == 'I') {
                $task_->estado = "P";
            } else if ($request->estado == 'P') {
                $task_->estado = "F";
            } else if ($request->estado == 'F') {
                $task_->estado = "A";
            }
        } else if ($request->avance == 0) {
            if ($request->estado == 'F') {
                $task_->estado = "P";
            } else if ($request->estado == 'P') {
                $task_->estado = "I";
            }
        }
        $task_->save();


        return response()->json($request);
    }
}
