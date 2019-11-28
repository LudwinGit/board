<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    protected $primaryKey = 'CodDiv';
    public $timestamps = false;
    protected $table = 'Divisiones';

    protected $fillable = [
        'CodDiv', 'Descripcion', 
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'Empresa', 'origen_facturacion','UsuarioModifico','FechaModificacion','EstadoRegistro','rowguid'
    ];

}
