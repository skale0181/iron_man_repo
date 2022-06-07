const INPUT_CHANGE = 'INPUT_CHANGE';

export const inputChange = (value) => {
    return {
        type: INPUT_CHANGE,
        payload: value
    }
}
