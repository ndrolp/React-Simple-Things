import { MutableRefObject, useState, useEffect } from "react";

export interface useIntersectionObserverResponse {
  /**
   * The element is visible on the screen
   */
  isVisible: boolean | undefined;
  /**
   * The intersection observer entry
   */
  entry: IntersectionObserverEntry | undefined;
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
      entry: entry,
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

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef.current]);

  return response;
}

export default useIntersectionObserver;
