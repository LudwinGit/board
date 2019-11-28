import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Task extends Component {
    constructor(props) {
        super(props)
        this.body = React.createRef()
        this.toggleDiv = this.toggleDiv.bind(this)
        this.changeProcess = this.changeProcess.bind(this)
        this.changeState = this.changeState.bind(this)
        this.state = {
            activo: 0,
            form: {
                estado: "",
                avance: 1
            },
            task: this.props.task
        }
    }

    toggleDiv() {
        if (!this.state.activo) {
            this.body.current.style.display = 'block'
            this.setState({
                activo: 1
            })
        }
        else {
            this.body.current.style.display = 'none'
            this.setState({
                activo: 0
            })
        }

    }

    changeState(a) {
        this.setState({
            form: {
                estado: this.state.task.estado,
                avance: a
            }
        })
        setTimeout(() => {
            this.changeProcess()
        }, 50);
    }

    async changeProcess() {
        try {
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`http://127.0.0.1:8000/api/task/${this.state.task.id}`, config)
            let data = await res.json()
            // this.setState({
            //     task:{
            //         estado :data['estado']
            //     }
            // })
            this.props.handleUpdateClick()
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    componentDidMount() {
        var a = new Date(this.props.task.usuario)
        a = a.getDate()
        this.setState({
            form: {
                estado: this.state.task.estado,
                avance: 1
            },
        })
    }

    render() {
        if (this.state.task.estado == 'I') {
            return (
                <div className="item">
                    <div className="item-button">
                        <div>

                            {
                                this.state.task.usuario
                            }
                        </div>
                        <div>
                            {
                                (this.props.usuario_division == this.props.task.departamento)
                                ?
                                <button onClick={() => this.changeState(1)} className="btn btn-primary"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                :
                                null
                            }
                            
                        </div>
                    </div>
                    <div className="item-header pendiente" onClick={this.toggleDiv} >
                        <b>{this.state.task.nombre}</b>
                        <i className="fa fa-chevron-down" ></i>
                    </div>

                    <div className="item-body" ref={this.body}>
                        {this.state.task.descripcion}
                    </div>
                </div>
            )
        }
        else if (this.state.task.estado == 'P') {
            return (
                <div className="item">
                    <div className="item-button">
                        <div>
                            {this.state.task.usuario}
                        </div>
                        <div>
                            {
                                (this.props.usuario_division == this.props.task.departamento)
                                    ?
                                    <div>
                                        <button onClick={() => this.changeState(0)} className="btn btn-primary"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                                        <button onClick={() => this.changeState(1)} className="btn btn-primary"><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div className="item-header proceso" onClick={this.toggleDiv} >
                        <b>{this.state.task.nombre}</b>
                        <i className="fa fa-chevron-down" ></i>
                    </div>

                    <div className="item-body" ref={this.body}>
                        {this.state.task.descripcion}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="item">
                    <div className="item-button">
                        <div>
                            {this.state.task.usuario}
                        </div>
                        <div>
                            {
                                (this.props.usuario_division == this.props.task.departamento)
                                    ?
                                    <div>
                                        <button onClick={() => this.changeState(0)} className="btn btn-primary"><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                                        <button onClick={() => this.changeState(1)} className="btn btn-success" title="Archivar"><i className="fa fa-archive" aria-hidden="true"></i></button>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </div>
                    <div className="item-header finalizado" onClick={this.toggleDiv} >
                        <b>{this.state.task.nombre}</b>
                        <i className="fa fa-chevron-down" ></i>
                    </div>

                    <div className="item-body" ref={this.body}>
                        {this.state.task.descripcion}
                    </div>
                </div>
            )
        }
    }

}