import React from 'react'
import IconButtom from '../template/iconButtom'


export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            // A expressão '<condition> ? true' : false é um 'if else inline'
            <tr key={todo._id}>
                <td className={todo.done ? 'makedAsDone': ''}>{todo.description}</td>
                <td>
                    <IconButtom style="warning" icon="undo" hide={!todo.done}
                        onClick={() => props.handleMarkAsPeding(todo)}></IconButtom>
                    <IconButtom style="success" icon="check" hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}></IconButtom>
                    <IconButtom style="danger" icon="trash-o" hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButtom>
                </td>
            </tr>
        ))
            
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}