import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar boleto',
            done: false
        },{
            _id: 2,
            description: 'Estudar Python avançado',
            done: false
        }, {
            _id: 3,
            description: 'Estudar React',
            done: true
        }]
    })
})

export default rootReducer