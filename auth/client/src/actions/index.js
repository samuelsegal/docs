import { AUTH_USER, AUTH_ERROR } from 'actions/types';
import axios from 'axios';

/**
 * ACTION CREATORS
 **/

/**
 *
 * @param {*} formProps
 * @param {*} callback
 */
export const signup = (formProps, callback) => async dispatch => {
	try {
		//add new user to mongo via api signup service
		const response = await axios.post('http://localhost:3090/signup', formProps);
		dispatch({ type: AUTH_USER, payload: response.data.token });
		//store token in local storage
		localStorage.setItem('token', response.data.token);
		//redirect user to /feature after successsful sign up
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Email already exists' });
	}
};
export const signin = (formProps, callback) => async dispatch => {
	try {
		//add new user to mongo via api signup service
		const response = await axios.post('http://localhost:3090/signin', formProps);
		dispatch({ type: AUTH_USER, payload: response.data.token });
		//store token in local storage
		localStorage.setItem('token', response.data.token);
		//redirect user to /feature after successsful sign up
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Invalid Credentials, are you sure this is you?' });
	}
};
export const signout = () => {
	localStorage.removeItem('token');
	return {
		type: AUTH_USER,
		payload: '',
	};
};
