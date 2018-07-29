import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButtom'


export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter'){
            e.shiftKey ? props.handleSearch(): props.handleAdd()
        } else if (e.key == 'Escape'){
            props.handleClear()
        }
    }
    return (
        <div role="form" className="todoForm">
            <Grid cols='9 9 10'>
                <input
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                    value={props.description}>
                </input>
                <h6>You can press Enter to add an item or Enter + Shift to search</h6>

            </Grid>
            <Grid cols='3 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton style="default" icon='close'
                    onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}