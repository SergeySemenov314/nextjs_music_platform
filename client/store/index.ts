import { reducer, rootState } from './reducers/index';
import { Context, createWrapper } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk, { ThunkDispatch } from 'redux-thunk';

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));


export const wrapper = createWrapper<Store<rootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<rootState, void, AnyAction>