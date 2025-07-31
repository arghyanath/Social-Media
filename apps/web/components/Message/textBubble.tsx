export default function TextBubble({ text, type }: { text: string, type: string }) {
    return (
        <div className={` flex ${type === "sent" ? " justify-end" : " justify-start"} w-full py-1`}>
            <span className=" bg-white text-black px-2 py-1 rounded ">
                {text}
            </span>
        </div>
    );
}