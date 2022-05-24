import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {charactersAPI, CharacterType} from '../api/characters-api';
import {RootState} from './store';

export const getCharacters = createAsyncThunk('characters/getCharacters', async (param, {getState, rejectWithValue}) => {
    try {
        const params: CharactersParamsType = (getState() as RootState).characters.params
        const data = await charactersAPI.getCharacters(params)
        return {characters: data.results}
    } catch (error) {
        return rejectWithValue(null)
    }
})

// export const createTask = createAsyncThunk('tasks/createTask', async (payload: { Tid: string, title: string }, {
//     dispatch,
//     rejectWithValue
// }) => {
//     dispatch(setAppStatus({status: 'loading'}))
//     try {
//         const res = await tasksAPI.createTask(payload.Tid, payload.title)
//         if (res.data.resultCode === 0) {
//             dispatch(setAppStatus({status: 'succeeded'}))
//             return {task: res.data.data.item}
//         } else {
//             handleServerAppError(dispatch, res.data)
//             return rejectWithValue(null)
//         }
//     } catch (error) {
//         handleServerNetworkError(dispatch, error as Error)
//         return rejectWithValue(null)
//     }
// })

export const charactersAsyncActions = {getCharacters}
//export const setAppError = createAction<{ error: null | string }>('app/setAppError')

const charactersInitialState = {
    characters: [] as CharacterType[],
    params: {
        page: 1,
    } as CharactersParamsType,
}

export const slice = createSlice({
    name: 'characters',
    initialState: charactersInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCharacters.fulfilled, (state, action) => {
            state.characters = action.payload.characters
        })
    /*.addCase(initializeApp.rejected, (state) => {
        state.isInitialized = true
    })
    .addCase(setAppError, (state, action) => {
        state.error = action.payload.error
    })*/
})

export const charactersReducer = slice.reducer

//types
export type CharactersInitialStateType = typeof charactersInitialState
export type CharactersParamsType = {
    page: number
}