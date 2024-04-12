import { MutableRefObject, useState, useEffect } from 'react';

export interface useIntersectionObserverResponse {
    /**
     * The intersection observer entry
     */
    entry: IntersectionObserverEntry | undefined;
    /**
     * The element is visible on the screen
     */
    isVisible: boolean | undefined;
}

export function useIntersectionObserver(
    elementRef: MutableRefObject<Element | null>
): useIntersectionObserverResponse {
    const [response, setResponse] = useState<useIntersectionObserverResponse>({
        isVisible: undefined,
        entry: undefined,
    });

    const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
        setResponse({
            isVisible: entry.isIntersecting,
            entry,
        });
    };

    useEffect(() => {
        if (!elementRef.current) {
            setResponse({ isVisible: undefined, entry: undefined });
            return;
        }

        const node = elementRef?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || !node) return;

        const observer = new IntersectionObserver(updateEntry);

        observer.observe(node);

        // eslint-disable-next-line consistent-return
        return () => observer.disconnect();
    }, [elementRef.current]);

    return response;
}

export default useIntersectionObserver;
