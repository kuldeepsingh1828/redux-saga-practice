let intialState = []
export default function reducer(state = intialState, action) {
    console.log("REDUCER CALLED")
    switch (action.type) {
        case 'SET_USER':
            state = action.users;
            break;
        default:
    }
    return state;
}