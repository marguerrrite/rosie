import { useEffect, useState, useRef } from "react";
import { getUrlArgs } from "components/utils"
import globalThis from '@ungap/global-this';
import "intersection-observer";


// from https://wattenberger.com/blog/react-hooks
export const useIsInView = (margin = "0px") => {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            // { margin }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return [ref, isIntersecting];
}


// from https://github.com/janosh/janosh.io/blob/master/src/hooks
export const useEventListener = (eventNames, handler, element = globalThis) => {
    // Create a ref that stores the handler.
    const savedHandler = useRef()
    if (!Array.isArray(eventNames)) eventNames = [eventNames]

    // Save handler to ref.current on initial call to useEventListener
    // and then update ref.current whenever the handler changes.
    // This allows the second useEffect below to always get the latest
    // handler without needing to have it in than hooks deps array which
    // could cause the effect to re-run every render.
    useEffect(() => (savedHandler.current = handler), [handler])

    useEffect(() => {
        const elementSupportsListener = element && element.addEventListener
        if (!elementSupportsListener) return

        // Create event listener that calls handler function stored in ref
        const listener = event => savedHandler.current(event)
        for (const e of eventNames) element.addEventListener(e, listener)
        return () => {
            for (const e of eventNames) element.removeEventListener(e, listener)
        }
    }, [element, eventNames])
}


// from https://github.com/janosh/janosh.io/blob/master/src/hooks
export const useOnClickOutside = (ref, handler, events) => {
    if (!events) events = [`mousedown`, `touchstart`]
    const detectClickOutside = event =>
        ref.current &&
        event &&
        !ref.current.contains(event.target) &&
        handler(event)
    useEventListener(events, detectClickOutside)
}

// from https://wattenberger.com/
export const useUrlParams = () => {
    const params = getUrlArgs()
    return params
}
