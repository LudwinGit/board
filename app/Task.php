<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    
    protected $table = 'tasks';

    protected $fillable = [
        'id', 'nombre', 'departamento','descripcion','estado','usuario_crea'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

}
