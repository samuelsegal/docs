import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
	it('has the correct type', () => {
		const action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it('has the corect payload', () => {
		const testComment = 'test comment';
		const action = saveComment(testComment);
		expect(action.payload).toEqual(testComment);
	});
});
