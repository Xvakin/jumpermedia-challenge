import dummyReducer from '../dummy';

describe('dummy reducer', () => {
    test('Should return false flag if no action passed', () => {
        const newState = dummyReducer(undefined, { type: 'OTHER_ACTION' });
        expect(newState.dummyFlag).toEqual(false);
    });

    test('Should flip dummyFlag if action is passed', () => {
        const newState = dummyReducer({dummyFlag: true}, { type: 'DUMMY_ACTION' });
        expect(newState.dummyFlag).toEqual(false);
    });
});