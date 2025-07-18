import { Appbar } from "../../components/Appbar/Appbar";
import { Sidebar } from "../../components/sidebar/sidebar";



export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (

        <main className="px-6 pt-22 scrollbar-none ">

            <Appbar />
            <Sidebar />
            {children}


        </main>



    );
}