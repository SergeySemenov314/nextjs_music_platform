import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootState } from './../store/reducers/index';


export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector