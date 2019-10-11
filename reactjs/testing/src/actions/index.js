import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';
import axios from 'axios';
import { URL_COMMENTS } from 'util/Constants';
export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment,
	};
}

export function fetchComments() {
	const response = axios.get(URL_COMMENTS);
	return {
		type: FETCH_COMMENTS,
		payload: response,
	};
}

export function changeAuth(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn,
	};
}
