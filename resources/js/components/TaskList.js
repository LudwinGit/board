import React, { Component } from 'react';

const TaskList = ({ tasks }) => (
    tasks.map((task) => (
        <div className="row justify-content-center">
            <div className="col-md-10 m-1">
                <div className="card" key={task.id}>
                    <div className="card-header"><b>{task.nombre}</b></div>

                    <div className="card-body">
                        {task.descripcion}
                    </div>

                </div>
            </div>
        </div>
    ))
)

export default TaskList