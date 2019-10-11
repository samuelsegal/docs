import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types.js';

it('handles actions of type SAVE_COMMENT', () => {
	const test_comment = 'test comment';
	const action = {
		type: SAVE_COMMENT,
		payload: test_comment,
	};

	const newState = commentReducer([], action);
	expect(newState).toEqual([test_comment]);
});

it('handles action with unknown type', () => {
	const newState = commentReducer([], { type: 'UNKNWOWN_TYPE_TOT_TEST' });
	expect(newState).toEqual([]);
});
