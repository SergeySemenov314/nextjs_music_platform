import { reducer, rootState } from './reducers/index';
import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, Store } from "redux";

const makeStore = (context: Context) => createStore(reducer);


export const wrapper = createWrapper<Store<rootState>>(makeStore, {debug: true});