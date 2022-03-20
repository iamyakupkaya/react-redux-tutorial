import { createStore } from "redux";
import reducers from "./index";

const configStore = () => {
  return createStore(reducers);
};

export default configStore;

// how does createStore work? let's explain it... and create our createStore method
/*

const createStore = (reducer) => {

    let state;
    //subscribe can be invoked too much so let's describe a listeners list
    let listeners = [];
    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state,action) // calculate new state
        listeners.forEach(listener => listener()) // all lisneter func. will be invoked
    }

    const subscribe = (listener) => {
        listeners.push(listener);

        // below code for unlisten
        return () => {
            listeners = listeners.filter(element => element !== listener)
        }
    }

    dispatch({}) // for initial getState
    
    return {getState, dispatch, subscribe};
}

*/
