import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';
/**
 * validates that reducers are generating state in the expected json structure
 * or format
 */
export default ({ dispatcher, getState }) => next => action => {
	//first call all other actions
	next(action);
	if (!tv4.validate(getState(), stateSchema)) {
		console.warn('invalid state sch ema detected!');
	}
};
