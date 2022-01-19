import { createSlice } from '@reduxjs/toolkit';

const searchResultSlice = createSlice({
    name: 'searchResults',
    initialState: {
        query: "",
        loading: false,
        items: [] as any[],
        nextPage: 0,
    },
    reducers: {
        resetQuery: (state, action) => {
            state.query = action.payload;
            state.loading = false;
            state.items = [];
            state.nextPage = 0;
        },
        append: (state, action) => {
            state.loading = false;
            state.items = [...state.items, ...action.payload];
            state.nextPage += 1;
        },
        setLoading: state => {
            state.loading = true
        },
    }
});

export default searchResultSlice;

export const { resetQuery, append, setLoading } = searchResultSlice.actions;