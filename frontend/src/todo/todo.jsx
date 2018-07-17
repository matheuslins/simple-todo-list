import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleAdd(){
        console.log(this)
    }
    handleChange(event){
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