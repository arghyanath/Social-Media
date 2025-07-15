import { Button } from "@repo/ui/button";
import { Modal } from "@repo/ui/modal";

export function SettingsModal({ onClose }: { onClose: () => void }) {


    return <Modal onClose={onClose} backgroundSlye="" position='bottom-left'
        modalStyle="w-52 h-45 mb-76 ml-6 flex flex-col p-2  justify-between bg-dark    rounded text-white">
        <Button varient="secondary">Theme</Button>
        <Button varient="secondary">Account</Button>
        <Button varient="secondary">Activity</Button>
    </Modal>

}