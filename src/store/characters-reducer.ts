import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
    charactersAPI,
    CharacterType,
    GenderType,
    StatusType
} from '../api/characters-api';
import {RootState} from './store';
import {Nullable} from '../api/api';

export const getCharacters = createAsyncThunk('characters/getCharacters', async (param, {getState, rejectWithValue}) => {
    try {
        const params: CharactersParamsType = (getState() as RootState).characters.params
        const data = await charactersAPI.getCharacters(params)
        return {characters: data.results}
    } catch (error) {
        return rejectWithValue(null)
    }
})

export const charactersAsyncActions = {getCharacters}

const charactersInitialState = {
    characters: [] as CharacterType[],
    params: {
        page: null,
        name: null,
        status: null,
        species: null,
        type: null,
        gender: null,
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
})

export const charactersReducer = slice.reducer

//types
export type CharactersInitialStateType = typeof charactersInitialState
export type CharactersParamsType = {
    page: Nullable<number>
    name: Nullable<string>
    status: Nullable<StatusType>
    species: Nullable<string>
    type: Nullable<string>
    gender: Nullable<GenderType>
}