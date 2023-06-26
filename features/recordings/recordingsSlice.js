import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchRecordings = createAsyncThunk(
    'recordings/fetchRecordings',
    async () => {
        const response = await fetch(baseUrl + 'recordings');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const recordingsSlice = createSlice({
    name: 'recordings',
    initialState: { isLoading: true, errMess: null, recordingsArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecordings.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRecordings.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.recordingsArray = action.payload;
            })
            .addCase(fetchRecordings.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const recordingsReducer = recordingsSlice.reducer;