import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default ({ initialState = {}, children }) => {
	return <Provider store={createStore(reducers, initialState)}>{children}</Provider>;
};
