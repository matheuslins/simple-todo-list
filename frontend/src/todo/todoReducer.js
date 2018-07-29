const INITIAL_STATE = {
    description: 'Digite aqui sua atividade',
    list: [{
        _id: 1,
        description: 'Atividade 1',
        done: false
    }]
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload} // evolução de estado usando spread
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}