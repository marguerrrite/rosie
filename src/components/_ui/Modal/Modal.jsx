import React, { useRef, useContext, useState, useEffect } from "react"
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
            <div className="ModalContext" ref={modalRef} />
        </div>
    );
}

export function Modal({ onClose, children, ...props }) {
    const modalNode = useContext(Context);


    return modalNode
        ? ReactDOM.createPortal(
           <>
                <div className="Modal__overlay" onClick={onClose}></div>
                <div className="Modal__content">
                    <div className="Modal__dialog" {...props}>
                        {children}
                        <button onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
           </>,
            modalNode
        )
        : null;
}
