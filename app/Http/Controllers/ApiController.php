<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Division;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function index()
    {
        $divisiones = Division::where('empresa','00001')->get();
        return response()->json($divisiones);
    }

    public function users(){
        $usuarios = DB::select('EXEC SP_USUARIOS_DIVISIONES 6');
        return response()->json($usuarios);
    }
}
