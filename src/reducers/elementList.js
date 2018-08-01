const elementList = (state = [], action) => {
    if(action.type === 'ADD_ELEMENT') {
        console.log(action.payload);
        return [...state, action.payload]
    }
    else if(action.type === 'CLEAR_LIST') {
        state = []
    }
    return state;
}

export default elementList;