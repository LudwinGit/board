import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {

    constructor(props) {
        super(props)
        this.handleUpdateClick = this.handleUpdateClick.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleUpdateClick() {
        this.props.updateList()
    }

    handleClick(division) {
        this.props.handleChangeDivision(division)
    }

    render() {
        var colorPendiente = {
            borderBottom: '3px red solid'
        }
        var colorProceso = {
            borderBottom: '3px green solid'
        }
        var colorFinalizado = {
            borderBottom: '3px blue solid'
        }

        return (
            <div className="grid-container">
                <div className="list sidebar">
                    <div className="sidebar-icon">
                        <img src="img/logo.png" />
                        <button
                            // onClick={this.showModal}
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#myModal">NUEVA TAREA
                        </button>
                    </div>
                    <div className="sidebar-content">
                        {
                            this.props.divisions.map((division, index) => {
                                if (division.CodDiv == this.props.division) {
                                    return (
                                        <div onClick={() => this.handleClick(division.CodDiv)} key={division.CodDiv}
                                            className="item-sidebar active"  >{division.Descripcion}</div>

                                    )
                                }
                                else {
                                    return (
                                        <div onClick={() => this.handleClick(division.CodDiv)} key={division.CodDiv}
                                            className="item-sidebar"  >{division.Descripcion}</div>

                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="list list-ingresando">
                    <p className="list-title" style={colorPendiente}>Pendiente</p>
                    <div className='list-body'>
                        {this.props.tasks.map((task) => {
                            if (task.estado == "I") {
                                return (
                                    <Task task={task} key={task.id} handleUpdateClick={this.handleUpdateClick} usuario_division={this.props.usuario_division} />
                                )
                            }
                            return (null)
                        }
                        )
                        }
                    </div>
                </div>
                <div className="list list-proceso">
                    <p className='list-title' style={colorProceso}>Proceso</p>
                    <div className='list-body'>
                        {this.props.tasks.map((task) => {
                            if (task.estado == "P") {
                                return (
                                    <Task task={task} key={task.id} handleUpdateClick={this.handleUpdateClick} usuario_division={this.props.usuario_division} />
                                )
                            }
                            return (null)
                        }
                        )
                        }
                    </div>
                </div>
                <div className="list list-finalizado">
                    <p className='list-title' style={colorFinalizado}>Finalizado</p>
                    <div className='list-body'>
                        {this.props.tasks.map((task) => {
                            if (task.estado == "F") {
                                return (
                                    <Task task={task} key={task.id} handleUpdateClick={this.handleUpdateClick} usuario_division={this.props.usuario_division} />
                                )
                            }
                            return (null)
                        }
                        )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskList;