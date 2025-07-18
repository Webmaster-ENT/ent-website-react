import AboutSection from "@/components/partials/AboutSection";
import DivisionSection from "@/components/partials/division/DivisionSection";
import Footer from "@/components/partials/Footer";
import Jumbotron from "@/components/partials/Jumbotron";
import Navbar from "@/components/partials/Navbar";

export default function HomePage() {
    return (
        <div className="bg-[url('/pattern.svg')] bg-no-repeat object-cover">
            <Navbar />

            {/* jumbotron */}
            <Jumbotron />

            {/* about section */}
            <AboutSection />

            {/* division section */}
            <DivisionSection />

            <Footer />
        </div>
    )
}