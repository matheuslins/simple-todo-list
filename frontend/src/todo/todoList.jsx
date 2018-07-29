import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButtom from '../template/iconButtom'
import { maskAsDone, maskAsPeding, remove } from './todoActions'


const TodoList =  props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            // A expressão '<condition> ? true' : false é um 'if else inline'
            <tr key={todo._id}>
                <td className={todo.done ? 'makedAsDone': ''}>{todo.description}</td>
                <td>
                    <IconButtom style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.maskAsPeding(todo)}></IconButtom>
                    <IconButtom style="success" icon="check" hide={todo.done}
                        onClick={() => props.maskAsDone(todo)}></IconButtom>
                    <IconButtom style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButtom>
                </td>
            </tr>
        ))
            
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({
    list: state.todo.list
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ maskAsDone, maskAsPeding, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)