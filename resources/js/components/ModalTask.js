import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskForm from './TaskForm';

export default class ModalTask extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        title="Nueva tarea"
        content="Modal Content"
        footer="Save"
        usuarios={this.props.usuarios}
      />
    );
  }
}


const ModalHeader = (props) => (
  <div className="modal-header">
    <h4 className="modal-title">{props.title}</h4>
    <button type="button" className="close" data-dismiss="modal">&times;</button>
  </div>
);

const ModalBody = (props) => (
  <div className="modal-body">
    <TaskForm usuarios={props.usuarios} departament={props.departament}/>
  </div>
)

const Modal = (props) => {
  
  return (
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <ModalHeader title={props.title} />
          <ModalBody content={props.content} usuarios={props.usuarios}/>
        </div>
      </div>
    </div>
  );
}
