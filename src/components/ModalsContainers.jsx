import { createPortal } from "react-dom"

const ModalContainers = ({children})=>{
        
    return createPortal(
    <>
    {children}
    </>
    , document.getElementById("modals-root")
    )
}

export default ModalContainers