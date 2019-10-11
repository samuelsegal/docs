import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
	const initialState = {
		comments: ['comment 1', 'comment 2'],
	};
	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});
it('creates one LI per comment', () => {
	console.log(wrapped.find('li').length);
});
