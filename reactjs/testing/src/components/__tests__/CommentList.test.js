import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let comments = ['comment 1', 'comment 2'];

beforeEach(() => {
	const initialState = {
		comments: comments,
	};
	wrapped = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it('creates one LI per comment', () => {
	expect(wrapped.find('li').length).toEqual(comments.length);
});

it('shows the text for each comment', () => {
	comments.forEach(comment => {
		expect(wrapped.render().text()).toContain(comment);
	});
});
