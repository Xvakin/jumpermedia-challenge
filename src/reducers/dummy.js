const initialState = {
    dummyFlag: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DUMMY_ACTION':
            return {
                ...state,
                dummyFlag: !state.dummyFlag
            }
        default:
            return state;   
    }
};