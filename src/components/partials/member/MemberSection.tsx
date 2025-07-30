import { useState, useMemo } from "react";
import MemberCard from "./MemberCard";
import { useMembersWithDetails } from "@/hooks/useMember";

const MemberSection = () => {
  // Set the initial active member per division
  const [activeMemberPerDivision, setActiveMemberPerDivision] = useState<{[key: string]: number}>({});
  
  // Use the hook to fetch members data
  const { members, loading, error } = useMembersWithDetails();

  // Division color mapping based on divisions.ts
  const divisionColorMap: {[key: string]: 'green' | 'blue' | 'pink' | 'yellow' | 'purple'} = {
    'journalist': 'green',
    'content planner': 'blue', 
    'Webmaster': 'pink',
    'Reporter': 'purple',
    'Videographer': 'yellow'
  };

  // Group members by division
  const membersByDivision = useMemo(() => {
    if (!members || members.length === 0) return {};
    
    const grouped = members.reduce((acc, member) => {
      const division = member.divisionName || 'Unknown Division';
      if (!acc[division]) {
        acc[division] = [];
      }
      acc[division].push(member);
      return acc;
    }, {} as {[key: string]: typeof members});

    return grouped;
  }, [members]);

  const divisions = Object.keys(membersByDivision);

  const handleNextMember = (division: string) => {
    const divisionMembers = membersByDivision[division];
    const currentActive = activeMemberPerDivision[division] || 0;
    setActiveMemberPerDivision(prev => ({
      ...prev,
      [division]: currentActive === divisionMembers.length - 1 ? 0 : currentActive + 1
    }));
  };

  const handlePrevMember = (division: string) => {
    const divisionMembers = membersByDivision[division];
    const currentActive = activeMemberPerDivision[division] || 0;
    setActiveMemberPerDivision(prev => ({
      ...prev,
      [division]: currentActive === 0 ? divisionMembers.length - 1 : currentActive - 1
    }));
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
  if (!members || members.length === 0 || divisions.length === 0) {
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

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-32"
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
          large role in the process. We're inviting you to see who's a great
          person behind the brush.
        </p>
      </div>

      {/* All Divisions Displayed Vertically */}
      <div className="w-full max-w-6xl space-y-16">
        {divisions.map((division) => {
          const divisionMembers = membersByDivision[division];
          const currentActiveMember = activeMemberPerDivision[division] || 0;
          
          // Transform API data to match MemberCard props for this division
          const transformedMembers = divisionMembers.map((member, index) => ({
            id: index,
            generation: `${member.genName}th ENT Generation`, 
            name: member.name,
            role: member.divisionName || "Unknown Division",
            major: `Majoring ${member.majorName || "Unknown Major"}`,
            image: member.photo, 
            isActive: index === currentActiveMember,
            divisionColor: divisionColorMap[member.divisionName || ''] || 'yellow'
          }));

          return (
            <div key={division} className="flex flex-col items-center">

              {/* Team Members Section for This Division */}
              <div className="relative w-full flex flex-col items-center justify-center">
                <div className="relative h-96 w-full flex items-center justify-center overflow-hidden">
                  {transformedMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`absolute transition-all duration-500 ease-in-out ${index === currentActiveMember ? "z-10" : "z-0"}`}
                      style={{
                        transform: `translateX(${(index - currentActiveMember) * 100}%) scale(${index === currentActiveMember ? 1 : 0.8})`,
                        opacity: index === currentActiveMember ? 1 : 0.8,
                        filter: `blur(${index === currentActiveMember ? 0 : 5}px)`,
                      }}
                    >
                      <MemberCard {...member} isActive={index === currentActiveMember} />
                    </div>
                  ))}
                </div>

                {/* Member Navigation within Division */}
                {divisionMembers.length > 1 && (
                  <div className="flex items-center justify-center space-x-8 mt-8">
                    <button
                      onClick={() => handlePrevMember(division)}
                      className="text-4xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      &lt;
                    </button>
                    <span className={`text-2xl font-semibold w-48 text-center ${
                      divisionColorMap[division] === 'green' ? 'text-green-600' :
                      divisionColorMap[division] === 'blue' ? 'text-blue-600' :
                      divisionColorMap[division] === 'pink' ? 'text-pink-600' :
                      divisionColorMap[division] === 'yellow' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>
                      {division}
                    </span>
                    <button
                      onClick={() => handleNextMember(division)}
                      className="text-4xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      &gt;
                    </button>
                  </div>
                )}

                {/* Member indicators */}
                {/* {divisionMembers.length > 1 && (
                  <div className="flex items-center justify-center space-x-2 mt-4">
                    {divisionMembers.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveMemberPerDivision(prev => ({
                          ...prev,
                          [division]: index
                        }))}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentActiveMember 
                            ? `${
                                divisionColorMap[division] === 'green' ? 'bg-green-600' :
                                divisionColorMap[division] === 'blue' ? 'bg-blue-600' :
                                divisionColorMap[division] === 'pink' ? 'bg-pink-600' :
                                divisionColorMap[division] === 'yellow' ? 'bg-yellow-600' :
                                'bg-purple-600'
                              }` 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MemberSection;
