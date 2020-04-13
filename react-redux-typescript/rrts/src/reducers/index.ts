import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { TODO } from '../actions/index';
export interface StoreState {
	todos: TODO[];
}

export const reducers = combineReducers<StoreState>({
	todos: todosReducer,
});
