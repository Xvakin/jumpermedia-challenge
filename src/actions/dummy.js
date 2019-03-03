export const dummyAction = () => dispatch => {
    dispatch({
        type: 'DUMMY_ACTION',
        payload: 'some_string'
    });
};
