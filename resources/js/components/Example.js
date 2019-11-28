import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import ModalTask from './ModalTask';

export default class Example extends Component {

    constructor(props) {
        super(props)
        this.state = {
            total_tasks: 0,
            tasks: [],
            divisions: [],
            usuarios: [],
            error: null,
            form: {
                descripcion: '',
                nombre: ''
            },
            division:0,
            usuario_division: 6
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeDivision = this.handleChangeDivision.bind(this)
        this.updateList = this.updateList.bind(this)
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
            let res = await fetch(`http://127.0.0.1:8000/api/task/${this.state.division}`)
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

        try {
            let res = await fetch('http://127.0.0.1:8000/api/division')
            let data = await res.json()
            this.setState({
                divisions: data,
            })

        } catch (error) {
            this.setState({
                error
            })
        }

        try {
            let res = await fetch('http://127.0.0.1:8000/api/users')
            let data = await res.json()
            this.setState({
              usuarios: data,
            })
      
          } catch (error) {
            this.setState({
              error
            })
          }
    }

    async updateList() {
        try {
            let res = await fetch(`http://127.0.0.1:8000/api/task/${this.state.division}`)
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

    handleChangeDivision(division){
        
        this.setState({
            division : division
        })

        setTimeout(() => {
            this.updateList()    
        }, 1);
        
    }

    render() {
        return (
            <div>
                <TaskList 
                    divisions={this.state.divisions} 
                    tasks={this.state.tasks} 
                    updateList={this.updateList} 
                    handleChangeDivision={this.handleChangeDivision}
                    division={this.state.division}
                    usuario_division={this.state.usuario_division}
                    />
                <ModalTask usuarios={this.state.usuarios} departament={this.state.division}/>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
