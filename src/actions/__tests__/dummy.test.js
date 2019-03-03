import { dummyAction } from '../dummy';

describe('dummyAction', () => {
    test('Should return correct action', async () => {
        const dispatch = jest.fn();
        await dummyAction()(dispatch);
        expect(dispatch).toBeCalledWith({
            type: 'DUMMY_ACTION',
            payload: 'some_string'
        });
    });
});