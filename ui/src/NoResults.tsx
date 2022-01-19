import { useSelector } from "react-redux"
import styled from "styled-components";
import { Store } from "./store"

const NoResultsDiv = styled.div`
    width: 100%;
    text-align: center;
    font-size: 2rem;
    color: #777;
    padding: 1rem;
`;

export const NoResults = () => {
    const { query, loading, items } = useSelector<Store>(x => x.searchResults) as any;

    const noResults = !!query && !loading && !items.length;

    return noResults ? <NoResultsDiv>No results found</NoResultsDiv> : null;
}