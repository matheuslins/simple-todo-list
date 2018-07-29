import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'


export const changeDescription = event =>({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value // target é o elemento html, neste caso <input>
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    /* O middleware redux thunk faz com que a action possa retornar não mais um
       objeto, mas sim o dispatcth que é quem dispara as ações. Deste jeito
       da pra controlar a ordem de execução*/
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch({type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}