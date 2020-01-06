import React, { useEffect, useRef } from "react"
import { ModalProvider } from "components/_ui/Modal/Modal";
import Layout from "components/Layout/Layout"
//import "styles/global.scss"

const windowGlobal = typeof window !== "undefined" && window
const documentGlobal = typeof document !== "undefined" && document

const AppWrapper = ({ ...props }) => {
    const [modalStatus, setModalStatus] = useState();

    console.log(...props.value)

    return (
        <ModalProvider>
            <Layout {...props} />
        </ModalProvider>
    )
}

export default AppWrapper
