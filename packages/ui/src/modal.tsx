"use client"

import { ReactNode, useRef } from "react"
interface ModalProps {
    onClose?: () => void,
    position: positionType,
    children: ReactNode,
    modalStyle: string,
    backgroundSlye: string
}
const modalPosition = {
    "top-left": " items-start justify-start",
    "top-right": " items-start justify-end",
    "bottom-left": " flex-col justify-end items-start",
    "bottom-right": " flex-col justify-end items-end",
    "middle": " justify-center items-center"
}

type positionType = keyof typeof modalPosition

export function Modal({ onClose, children, position, modalStyle, backgroundSlye }: ModalProps) {

    const modalRef = useRef<HTMLDivElement>(null);
    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (modalRef.current === e.target) {
            onClose && onClose()
        }
    }

    return <div ref={modalRef} className={`w-screen h-screen  z-50 fixed top-0 left-0 flex item ${modalPosition[position]} ${backgroundSlye} `} onClick={closeModal}>
        <div className={modalStyle}>
            {children}
        </div>
    </div>
}