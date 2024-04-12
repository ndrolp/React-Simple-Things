import React, { MutableRefObject, useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

type ScrollDetectorCallback = (visible: boolean) => void;

interface ScrollDetectorParams {
    /**
     * This callback will be triggered when the parameter show is true
     * and the element visivility changes
     */
    callback: ScrollDetectorCallback;
    /**
     * Determines if the thetector showld hava a display
     */
    show: boolean;
    /**
     * This will be the stile for the Scroll Detector container
     * @default
     * {
     *    marginTop: `2px`,
     *    height: "2px",
     *    width: "100%",
     * }
     */
    style?: React.CSSProperties;
}

export default function ScrollDetector({
    show,
    callback,
    style = {
        marginTop: `2px`,
        height: '2px',
        width: '100%',
    },
}: ScrollDetectorParams) {
    const scrollElement: MutableRefObject<HTMLDivElement | null> | null =
        useRef(null);
    const { isVisible } = useIntersectionObserver(scrollElement);

    useEffect(() => {
        if (show) callback(!!isVisible);
    }, [isVisible, show, callback]);

    return show ? <div ref={scrollElement} style={style} /> : null;
}
