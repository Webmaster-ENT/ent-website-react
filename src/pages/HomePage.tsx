import AboutSection from "@/components/partials/AboutSection";
import DivisionSection from "@/components/partials/division/DivisionSection";
import Jumbotron from "@/components/partials/Jumbotron";
import MemberSection from "@/components/partials/member/MemberSection";

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
        </>
    )
}