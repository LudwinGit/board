import React, { Component } from 'react';

const TaskForm = ({ form,onChange,onSubmit }) => (
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <input className='form-control' type='text' name='nombre' placeholder='Nombre' 
                value={form.nombre} onChange={onChange}
            />
        </div>
        <div className='form-group'>
            <input className='form-control' type='text' name='descripcion' placeholder='Descripción'
                value={form.descripcion} onChange={onChange}
            />
        </div>
        <button type='submit' className='btn btn-primary'>Crear</button>
    </form>
)

export default TaskForm
