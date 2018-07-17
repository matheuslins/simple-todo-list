import React, {Component} from 'react'
import axios from 'axios' // client http

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'


const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }
    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description })
            .then(reps => this.refresh())
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
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}