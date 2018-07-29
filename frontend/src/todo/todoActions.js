export const changeDescription = event =>({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value // target é o elemento html, neste caso <input>
})