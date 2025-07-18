
import { MiddlePart } from "../../../components/home/homeMiddlePart";
import { RightSide } from "../../../components/home/HomeRightPart";



export default async function Page() {

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
