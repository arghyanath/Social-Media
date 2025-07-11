const sizeType = {
    "sm": " text-2xl",
    "md": " text-3xl",
    "lg": " text-4xl"
}

interface PropsType {
    size: "sm" | "md" | "lg"
}
export function VistagramHeader({ size }: PropsType) {
    return (
        <div className={` ${sizeType[size]}   text-white`}>Vistagram</div>
    );
}
