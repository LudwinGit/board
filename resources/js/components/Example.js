import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

export default class Example extends Component {

    constructor(props) {
        super(props)
        this.state = {
            total_tasks: 0,
            tasks: [],
            error: null,
            form: {
                descripcion: '',
                nombre: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    async componentDidMount() {
        try {
            let res = await fetch('http://127.0.0.1:8000/api/tasks')
            let data = await res.json()
            this.setState({
                tasks: data,
                total_tasks: data.length
            })

        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {/* <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">Tareas {this.state.total_tasks}</div>

                            <div className="card-body">
                                <TaskForm form={this.state.form}
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                />
                            </div>
                        </div>
                        <br />
                    </div> */}
                    <div className="col-md-4">
                        <div className="">
                            <div className="card-header bg-danger">Pendiente</div>
                        </div>
                        <TaskList tasks={this.state.tasks} />
                    </div>
                    <div className="col-md-4" >
                        <div className="">
                            <div className="card-header bg-warning">Proceso</div>
                        </div>
                        <TaskList tasks={this.state.tasks} />
                    </div>
                    <div className="col-md-4" >
                        <div className="">
                            <div className="card-header bg-primary">Finalizado</div>
                        </div>
                        <TaskList tasks={this.state.tasks} />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
