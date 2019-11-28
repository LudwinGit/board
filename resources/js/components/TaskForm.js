import React, { Component } from 'react';
class TaskForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            form: {
                name: "",
                description: "",
                user: "",
                departament:this.props.departament
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch('http://127.0.0.1:8000/api/task', config)
            let data = await res.json()

            this.setState({
                tasks: this.state.tasks.concat(data)
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <form autoComplete='off' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <input className='form-control' type='text' name='name' placeholder='Nombre' onChange={this.handleChange} value={this.state.form.name} />
                </div>
                <div className='form-group'>
                    <textarea className="form-control" name="description" placeholder='Descripción' maxLength="250" rows="5" onChange={this.handleChange} value={this.state.form.description}>
                    </textarea>
                </div>

                <div className="form-group">
                    <select className="form-control" name="user" required value={this.state.form.user} onChange={this.handleChange}>
                        <option value="">Seleccionar Encargado</option>
                        {
                            this.props.usuarios.map((usuario, index) => {
                                return (
                                    <option key={index} value={usuario.USUARIO}>{usuario.EMPLEADO}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button type='submit' className='btn btn-primary'>Crear</button>
                <button type='button' className='btn btn-danger' data-dismiss="modal">Cancelar</button>
            </form>
        )
    }
}

export default TaskForm
