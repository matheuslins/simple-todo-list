const INITIAL_STATE = {
    description: '',
    list: []
}

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload} // evolução de estado usando spread
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        case 'TODO_CLEAR':
            return {...state, description: ''}
        default:
            return state
    }
}