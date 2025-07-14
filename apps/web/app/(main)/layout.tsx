import { Appbar } from "../../components/main/Appbar";
import { Sidebar } from "../../components/main/sidebar";


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