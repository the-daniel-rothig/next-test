import { append, setLoading, resetQuery as sliceResetQuery } from './searchResultSlice';
import { Dispatch } from 'redux';
import store from './store';

const hostUri = process.env.REACT_APP_API_HOST || "http://localhost:3000";


async function fetchMoreResults(query: string, page: number = 0) {
    const queryParams = new URLSearchParams({
        q: query,
        page: `${page}`
    });
    const res = await fetch(`${hostUri}/search?${queryParams.toString()}`);
    return await res.json();
}

export const resetQuery = (query: string) => async (dispatch: Dispatch, getState: typeof store.getState ) => {
    dispatch(sliceResetQuery(query));
    if (query) {
        dispatch(setLoading);
        const resJson = await fetchMoreResults(query);
        if (getState().searchResults.query === query) {
            dispatch(append(resJson));
        }
    }
}

export const loadNextPage = async (dispatch: Dispatch, getState: typeof store.getState) => {
    const { searchResults: {nextPage, loading, query} } = getState();

    if (!loading && query) {
        dispatch(setLoading);
        const resJson = await fetchMoreResults(query, nextPage);
        if (getState().searchResults.query === query) {
            dispatch(append(resJson));
        }
    }
}