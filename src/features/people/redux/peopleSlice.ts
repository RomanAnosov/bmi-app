import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';
import { IPerson } from '../../../types/person';
import { read as readPeople } from '../../../api/peopleStore';

const initialState = {
    list: [] as IPerson[],
    isFetching: false,
    isFetchError: false,
    isFetchSuccess: false
};

export const fetch = createAsyncThunk('people/fetch', () => readPeople());

export const counterSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IPerson>) => {
            state.list.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetch.pending, (state) => {
            state.isFetching = true;
            state.isFetchError = false;
            state.isFetchSuccess = false;
        });
        builder.addCase(fetch.fulfilled, (state, action: PayloadAction<IPerson[]>) => {
            state.list = action.payload;
            state.isFetching = false;
            state.isFetchError = false;
            state.isFetchSuccess = true;
        });
        builder.addCase(fetch.rejected, (state) => {
            state.list = [];
            state.isFetching = false;
            state.isFetchError = true;
            state.isFetchSuccess = false;
        });
    }
});

export const { add } = counterSlice.actions;

export const selectPeople = (state: RootState) => state.people;

export default counterSlice.reducer;
