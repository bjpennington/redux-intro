const secondReducer = (state = 0, action) => {
    if(action.type === 'BUTTON_TWO') {
        state--;
    }   
    return state;
}

export default secondReducer;