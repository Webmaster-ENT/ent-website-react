import { useState } from "react";
import MemberCard from "./MemberCard";
import { useMembersWithDetails } from "@/hooks/useMember";

const MemberSection = () => {
  // Set the initial active member to 0 (first member)
  const [activeMember, setActiveMember] = useState(0);
  
  // Use the hook to fetch members data
  const { members: apiMembers, loading, error } = useMembersWithDetails();

  const handleNext = () => {
    setActiveMember((prev) => (prev === apiMembers.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveMember((prev) => (prev === 0 ? apiMembers.length - 1 : prev - 1));
  };

  // Show loading state
  if (loading) {
    return (
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center my-32"
        id="member"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
          <p className="text-lg text-gray-600">Loading members...</p>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center my-32"
        id="member"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="text-red-500 text-xl">⚠️</div>
          <p className="text-lg text-red-600">Error loading members: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // Show empty state
  if (!apiMembers || apiMembers.length === 0) {
    return (
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center my-32"
        id="member"
      >
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-gray-600">No members found.</p>
        </div>
      </section>
    );
  }

  // Transform API data to match MemberCard props
  const transformedMembers = apiMembers.map((member, index) => ({
    id: parseInt(member.id),
    generation: "ENT 19th Generation", // Default generation, you might want to add this to API
    name: member.name,
    role: member.divisionName || "Unknown Division",
    major: `Majoring ${member.majorName || "Unknown Major"}`,
    image: "/assets/members/default.png", // Default image, you might want to add image field to API
    isActive: index === activeMember,
  }));

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center my-32"
      id="member"
    >
      {/* Decorative components */}
      <div className="hidden md:flex">
        <img
          src={"/icons/rafa.svg"}
          alt="Decorative Person 1"
          className="absolute left-36 top-10 w-auto h-auto object-cover rounded-full"
        />
        <img
          src={"/icons/rafa.svg"}
          alt="Decorative Person 2"
          className="absolute right-36 top-42 w-auto h-auto object-cover rounded-full"
        />
      </div>

      <img
        src={"/icons/star.svg"}
        alt="star"
        width={20}
        height={20}
        className="absolute animate-spin right-5 top-5 md:hidden"
      />

      {/* Title Section */}
      <div className="flex max-md:px-5 flex-col items-center space-y-6 md:space-y-10 mb-16">
        <h1 className="font-medium max-md:hidden text-6xl md:text-center leading-snug">
          Good Quality Came
          <br />
          From God, And Our Great Team
        </h1>
        <h1 className="font-medium text-4xl leading-tight md:hidden">
          Good Quality Came
          <br />
          From God, And Our Great Team
        </h1>
        <p className="w-full max-w-4xl md:text-center text-base md:text-lg">
          For every successful quality product, there are candidates who play a
          large role in the process. We’re inviting you to see who’s a great
          person behind the brush.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="relative h-96 w-full flex items-center justify-center overflow-hidden">
          {transformedMembers.map((member, index) => (
            <div
              key={member.id}
              className={`absolute transition-all duration-500 ease-in-out ${index === activeMember ? "z-10" : "z-0"}`}
              style={{
                transform: `translateX(${(index - activeMember) * 100}%) scale(${index === activeMember ? 1 : 0.8})`,
                opacity: index === activeMember ? 1 : 0.8,
                filter: `blur(${index === activeMember ? 0 : 5}px)`,
              }}
            >
              <MemberCard {...member} isActive={index === activeMember} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-8 mt-8">
          <button
            onClick={handlePrev}
            className="text-4xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
          >
            &lt;
          </button>
          <span className="text-2xl font-semibold w-48 text-center">
            {transformedMembers[activeMember]?.role || "Unknown Role"}
          </span>
          <button
            onClick={handleNext}
            className="text-4xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;
