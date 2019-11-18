import { throttle } from 'lodash';
import React, { useEffect, useRef, useState } from 'react';
import { useEventListener, useOnClickOutside } from "hooks";
import classNames from 'classnames';
import './TOC.scss';


// Adaped from https://github.com/janosh/janosh.io/tree/master/src/components/Toc

const accumulateOffsetTop = (el, totalOffset = 0) => {
    while (el) {
        totalOffset += el.offsetTop - el.scrollTop + el.clientTop
        el = el.offsetParent
    }
    return totalOffset
}

const TOC = ({ className, headingSelector, getTitle, getDepth, ...rest }) => {
    const { throttleTime = 200 } = rest
    const [headings, setHeadings] = useState({
        titles: [],
        nodes: [],
        minDepth: 0,
    })
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState()
    const ref = useRef()

    useOnClickOutside(ref, () => setOpen(false))
    useEffect(() => {
        // Fallback to sensible defaults for headingSelector, getTitle and getDepth
        // inside useEffect rather than specifying them as Toc default props to avoid
        // the need for useMemo and useCallback, resp.
        // Otherwise, these would change on every render and since this effect calls
        // setHeadings which triggers a rerender, it would cause an infinite loop.

        const selector =
            headingSelector || Array.from({ length: 2 }, (_, i) => `main h` + (i + 1))
        const nodes = Array.from(document.querySelectorAll(selector))
        const titles = nodes.map(node => ({
            title: getTitle ? getTitle(node) : node.innerText,
            depth: getDepth ? getDepth(node) : Number(node.nodeName[1]),
        }))

        const minDepth = Math.min(...titles.map(h => h.depth))
        setHeadings({ titles, nodes, minDepth })
    }, [headingSelector, getTitle, getDepth])

    const scrollHandler = throttle(() => {
        const { titles, nodes } = headings
        // Offsets need to be recomputed because lazily-loaded
        // content increases offsets as user scrolls down.
        const offsets = nodes.map(el => (
            accumulateOffsetTop(el)
        ))

        const activeIndex = offsets.findIndex(
            offset => offset > window.scrollY + 90
        )

        setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1)
    }, throttleTime)
    useEventListener(`scroll`, scrollHandler)

    return (
        <div className={classNames(className, "TOC__container")}>
            {/* <div className="TOC__toggle" opener open={open} onClick={() => setOpen(true)} size="1.6em"></div> */}
            <div className="TOC" ref={ref} open={open}>
                {/* <div className="TOC__title">
                    <div className="TOC__toggle" closer onClick={() => setOpen(false)} />
                </div> */}
                <nav>
                    {headings.titles.map(({ title, depth }, index) => (
                        <div className={classNames(
                                "TOC__link",
                                `TOC__link--h${depth}`,
                                (active === index) ? "TOC__link--active" : undefined,
                            )}
                            key={title}
                            onClick={event => {
                                event.preventDefault()
                                setOpen(false)
                                headings.nodes[index].scrollIntoView({
                                    behavior: `smooth`,
                                    block: `start`,
                                })
                            }}
                        >
                            <div>
                                {/* {index} */}
                                {title}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    )
};

TOC.propTypes = {

};

export default TOC;