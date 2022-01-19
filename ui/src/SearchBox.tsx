import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetQuery } from "./api";
import { Store } from "./store";

const SearchBoxInput = styled.input`
    padding: 10px 20px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 1rem;
    font-size: 1.5rem;
    outline: none;
    border-style:
    margin-bottom: 3rem;

    &:active, &:focus {
        boder: solid 2px #ccc;    
    }
`

export const SearchBox = () => {
    const dispatch = useDispatch();
    const value =  useSelector<Store>(x => x.searchResults.query) as string;
    
    return (
        <SearchBoxInput 
            placeholder="Search by track, album or artist..."
            onChange={e => dispatch(resetQuery(e.currentTarget.value))}
            value={value}
        />
    );
}