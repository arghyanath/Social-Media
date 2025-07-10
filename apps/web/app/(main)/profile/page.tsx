

import { ProfileDetails } from "../../../components/main/profileDetails";


export default function Profile() {
    return (
        <div className=" text-white flex flex-col  p-6 ">
            <div className=" grid grid-cols-[1fr_3fr] ">
                <div></div>
                <div className=" ">
                    <ProfileDetails />
                </div>

            </div>



        </div>
    );
}
