import axios from 'axios'
import { Z_DEFAULT_COMPRESSION } from 'zlib';

const URL = 'http://localhost:3003/api/todos'


export const changeDescription = event =>({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value // target é o elemento html, neste caso <input>
})

export const search = () => {
    return (dispatch, getState) => {
        // o getState pega o valor na store
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    /* O middleware redux thunk faz com que a action possa retornar não mais um
       objeto, mas sim o dispatcth que é quem dispara as ações. Deste jeito
       da pra controlar a ordem de execução*/
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const maskAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const maskAsPeding = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => dispatch({type: 'TODO_MARKED_AS_PEDING', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()]
}