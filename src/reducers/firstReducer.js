const firstReducer = (state = 0, action) => {
    if(action.type === 'BUTTON_ONE') {
        state++;
    }
    else if(action.type === 'BUTTON_TWO') {
        state--;
    }
    return state;
}

export default firstReducer;