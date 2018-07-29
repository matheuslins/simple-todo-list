import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButtom'
import {changeDescription, search} from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key == 'Escape') {
            this.props.handleClear()
        }
    }
    render (){
        return (
            <div role="form" className="todoForm">
                <Grid cols='9 9 10'>
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description}>
                    </input>
                    <h6>You can press Enter to add an item or Enter + Shift to search</h6>

                </Grid>
                <Grid cols='3 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                    <IconButton style="default" icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.todo.description,
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)