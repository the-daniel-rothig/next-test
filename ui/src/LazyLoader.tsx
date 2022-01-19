import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadNextPage } from "./api";
import { Store } from "./store";

function isInViewport(element: HTMLElement | null) {
    if (!element) {
        return;
    }

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export const LazyLoader = () => {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const isLoading = useSelector<Store>(x => x.searchResults.loading)

    useEffect(() => {
        const onScroll = () => {
            if (isInViewport(ref.current)) {
                dispatch(loadNextPage);
            }
        }
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, []);

    return <div ref={ref}>{isLoading ? "Loading..." : null}</div>;
}