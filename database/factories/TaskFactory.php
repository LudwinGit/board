<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'nombre' => $faker->text($maxNbChars=25),
        'descripcion' => $faker->text($maxNbChars=250),
        'usuario_crea' => 'IF009',
        'departamento' => '06'
    ];
});
