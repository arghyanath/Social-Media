import React from "react"

interface PropsTypes {

    placeholder: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    reference?: React.Ref<HTMLInputElement>,
    type?: string,
    customStyle?: string
}



export function Input({ placeholder, type, reference, onChange, customStyle }: PropsTypes) {
    return <input required type={type}
        className={customStyle ? customStyle : `w-full text-sm p-2  border bg-dark border-deepGray text-white outline-none`}
        ref={reference} placeholder={placeholder} onChange={onChange} />



}