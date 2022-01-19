import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { resetQuery } from "./api";
import { Dispatch, Store } from "./store";

const Ul = styled.ul`
`;

const Li = styled.li`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
`

const Img = styled.img`
    margin-right: 10px;
`

export const Listing = () => {
    const results = useSelector<Store>(x => x.searchResults.items) as any[];

    return (
        <Ul>
            {results.map((x: any) => (
                <Li>
                    <div><Img src={x.artwork} /></div>
                    <div>
                        {x.name} {x.kind !== "Song" ? `(${x.kind})` : ""}
                        &nbsp;
                        <a href={x.url}>Learn more&hellip;</a>
                    </div>
                </Li>
            ))}
        </Ul>
    );
}