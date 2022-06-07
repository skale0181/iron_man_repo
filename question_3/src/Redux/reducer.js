
const initialState = {
    inputdata:"",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
        return {
           inputdata: action.payload
        };
        default:
        return state;
    }
    }