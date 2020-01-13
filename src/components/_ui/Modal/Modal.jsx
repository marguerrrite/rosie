import React, { useRef, useContext, useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from "components/_ui/Button/Button"
import classNames from 'classnames'
import ReactDOM from "react-dom"
import "./Modal.scss"

const Context = React.createContext();

export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [context, setContext] = useState();

    // make sure re-render is triggered after initial
    // render so that modalRef exists
    useEffect(() => {
        setContext(modalRef.current);
    }, []);


    return (
        <div className="ModalContext">
            <Context.Provider value={context}>
                {children}
            </Context.Provider>
            <div ref={modalRef} />
        </div>
    );
}

export function Modal({ className, onClose, children, useCloseButton, ...props }) {
    const modalNode = useContext(Context);


    return modalNode
        ? ReactDOM.createPortal(
            <div className="Modal__container">
                <div className="Modal__overlay" onClick={onClose}></div>
                <div className={classNames(className, "Modal__content")}>
                    <div className="Modal__dialog" {...props}>
                        {children}
                        {useCloseButton ? (
                            <Button
                                className="Modal__button Modal__button--close"
                                onClick={onClose}
                            >
                                Close
                            </Button>
                        ) : (
                            <>
                                <div className="Modal__close" onClick={onClose}>
                                    <FontAwesomeIcon className="Modal__close__icon" icon={faTimes} />
                                </div>
                                <Button
                                    className="Modal__button Modal__button--mobile-only Modal__button--close"
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </>
                        )}
                        {/* <button onClick={onClose}>
                            Close
                        </button> */}
                    </div>
                </div>
           </div>,
            modalNode
        )
        : null;
}
