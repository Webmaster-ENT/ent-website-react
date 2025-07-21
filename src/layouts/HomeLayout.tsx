import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import { Outlet } from "react-router";


export default function HomeLayout() {
    return (
        <div className="bg-[url('/pattern.svg')] bg-no-repeat object-cover">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}