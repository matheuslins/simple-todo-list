import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButtom'


export default props => (
    <div role="form" className="todoForm">
        <Grid cols='9 9 10'>
            <input id="description" className="form-control"
                placeholder="Adicione uma tarefa"
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>
        <Grid cols='3 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)