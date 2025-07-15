import { getServerSession } from "next-auth";
import { MiddlePart } from "../../../components/home/homeMiddlePart";
import { RightSide } from "../../../components/home/HomeRightPart";
import { authOptions } from "../../../lib/auth";


export default async function Page() {
    const session = await getServerSession(authOptions)
    return (
        <div className=" text-white scrollbar-none">

            <div className=" grid grid-cols-[1fr_1fr_1fr] ">
                <div className=""></div>


                <MiddlePart />


                <div>
                    <RightSide />

                </div>
            </div>

        </div>
    );
}
