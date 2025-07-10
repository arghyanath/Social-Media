
interface PropsTypes {
    round: "none" | "rounded" | "full",
    placeholder: string,
    onChange?: () => void,
    reference?: React.Ref<HTMLInputElement>
}

const inputStyle = {
    "none": " ",
    "rounded": " rounded-lg",
    "full": " rounded-full"
}

export function Input({ round, placeholder, reference, onChange }: PropsTypes) {
    return <input required className={`w-full text-sm p-2 ${inputStyle[round]} border bg-dark border-deepGray text-white outline-none`} ref={reference} placeholder={placeholder} onChange={onChange} />

}