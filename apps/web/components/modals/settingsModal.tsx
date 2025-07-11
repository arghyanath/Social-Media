import { Button } from "@repo/ui/button";
import { Modal } from "@repo/ui/modal";

export function SettingsModal({ onClose }: { onClose: () => void }) {

    const defaultStyle = " text-liteGray "
    return <Modal onClose={onClose} backgroundSlye="" position='bottom-left'
        modalStyle="w-48 h-45 ml-60 mb-48 flex flex-col p-2  justify-between bg-dark  rounded text-white">
        <Button varient="secondary"><div className={defaultStyle}  >Theme</div></Button>
        <Button varient="secondary"><div className={defaultStyle}  >Account</div></Button>
        <Button varient="secondary"><div className={defaultStyle} >Activity</div></Button>
    </Modal>

}