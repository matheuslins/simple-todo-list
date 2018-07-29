import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButtom'
import {add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e) {
        const { add, search, clear, description} = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key == 'Escape') {
            clear()
        }
    }
    render (){
        // padrão "destructure"
        const { add, search, clear, description} = this.props
        return (
            <div role="form" className="todoForm">
                <Grid cols='9 9 10'>
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={description}>
                    </input>
                    <h6>You can press Enter to add an item or Enter + Shift to search</h6>

                </Grid>
                <Grid cols='3 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>
                    <IconButton style="default" icon='close'
                        onClick={() => clear()}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description,
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search, add, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)