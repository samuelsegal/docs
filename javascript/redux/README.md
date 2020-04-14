# Redux Basics

### Redux cycle  
1) To change the state of an app we call an action creator
2) This action  creator produces anaction
3) This action is dispatched.
4) dispatch forwards the actino to ALL the reducers
5) The reducers return the new state.

### Combine Reducers
The combine reducers function below creates the state for the application store.  
It cretes the state with objects that represent each reducer key passed in.  
Full example can be viewed @ https://codepen.io/Samoooo/pen/MWaaxgO?editors=0010  
```

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting,
  claimsHistory,
  policies
});

const store = createStore(ourDepartments);

const action = createPolicy('Homie', 20);

/*
* The dispatch of action below causes all of the reducers to run.
* This is how both policies and accounting objects get updated in the store.
* Pretty pretty good
*/

store.dispatch(action);

console.log(store.getState());
```

