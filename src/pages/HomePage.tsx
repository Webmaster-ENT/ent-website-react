import AboutSection from "@/components/partials/AboutSection";
import DivisionSection from "@/components/partials/division/DivisionSection";
import Jumbotron from "@/components/partials/Jumbotron";
import MediaSection from "@/components/partials/MediaSection";
import MemberSection from "@/components/partials/member/MemberSection";
import MagazineSection from "@/components/partials/MagazineSection";

export default function HomePage() {
    return (
        <>
            {/* jumbotron */}
            <Jumbotron />

            {/* about section */}
            <AboutSection />

            {/* division section */}
            <DivisionSection />

            {/* member section */}
            <MemberSection />

            {/* magazine section */}
            <MagazineSection />

            {/* media section */}
            <MediaSection />
        </>
    )
}