import {ActionCreatorsMapObject, bindActionCreators, combineReducers} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {useMemo} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {charactersReducer} from './characters-reducer';

const rootReducer = combineReducers({
    characters: charactersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(actions, dispatch), [])
}

//types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store