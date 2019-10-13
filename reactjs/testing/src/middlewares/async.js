/**
 * replaces reduxpromise. THis is for demonstration of developing middleware
 */
export default ({ dispatch }) => next => action => {
	//Check if payload is a promise. If so wait and resolve
	// otherwise forward to the next middleware
	if (!action.payload || !action.payload.then) {
		return next(action);
	}

	//This actions payload most likely is a promise
	//Wait for the promise to complete.
	// Then create a new action with the
	//response data as the payload and redispatch
	action.payload.then(function(response) {
		const newAction = { ...action, payload: response };
		dispatch(newAction);
	});
};
