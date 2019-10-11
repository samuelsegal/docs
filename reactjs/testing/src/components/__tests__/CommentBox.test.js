import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and 2 buttons', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'test comment' },
		});
		wrapped.update();
	});
	it('has a textarea that one can input text available', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('test comment');
	});

	it('form submission updates the text area  with an empty value', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
