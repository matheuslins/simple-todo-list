import React from 'react'
import IconButtom from '../template/iconButtom'


export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconButtom style="danger" icon="trash-o"
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