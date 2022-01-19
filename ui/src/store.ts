import { configureStore } from '@reduxjs/toolkit';
import searchResultSlice from './searchResultSlice';

const store = configureStore({
    reducer: {
        searchResults: searchResultSlice.reducer
    }
});

export default store;

export type Store = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;