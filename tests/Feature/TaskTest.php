<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Task;

class TaskTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $task = factory(Task::class)->create();
        $response = $this->json('GET','/api/tasks');
        $response->assertStatus(200);
        // $response->assertStatus(200)
        //          ->assertJsonStructure([
        //              'id','nombre','descripcion','usuario_crea','departamento','estado'
        //          ])
        // ;
    }

    public function testUpdateStateProcessTask(){
        // $task = Task::where(['estado','I'])->get();
        // $task->estado= 'P';
        // $task->save();
        // $response = $this->json('PUT','/api/task');
        // $response->assertStatus(200);
    }
}
