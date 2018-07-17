import React, {Component} from 'react'
import axios from 'axios' // client http

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const URL = 'http://localhost:3003/api/todos/'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
            .then(reps => console.log('Funfou pae'))
    }
    handleChange(event){
        /* o que eh digitado no input eh passado para o this.state 
           que em seguida eh atualizado e em realtime modifica o estado
           do input*/
        this.setState({...this.state, description: event.target.value})
    }
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadstro"/>
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}