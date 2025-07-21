import React from 'react';

interface MemberCardProps {
  generation: string;
  name: string;
  role: string;
  major: string;
  image: string;
  isActive: boolean;
}

const MemberCard: React.FC<MemberCardProps> = ({ generation, name, role, major, image, isActive }) => {
  const majorWords = major.split(' ');
  const majorLine1 = majorWords[0];
  const majorLine3 = majorWords.slice(-2).join(' ');
  const majorLine2 = majorWords.slice(1, -2).join(' ');

  return (
    <div className={`relative transition-transform duration-500 ${isActive ? 'scale-105' : 'scale-90'}`}>
      <div className="w-112 h-75 bg-yellow-200 rounded-3xl p-6 flex items-end relative">
        <div className="w-full h-62 bg-white rounded-2xl shadow-lg relative flex"> {/* Adjusted height to h-72 */}
          <div className="w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-4xl font-bold">{name}</h3>
            <p className="text-2xl text-gray-600">{role}</p>
            <div className="text-sm text-gray-400 mt-2">
              <p>{majorLine1}</p>
              <p>{majorLine2}</p>
              <p>{majorLine3}</p>
            </div>
          </div>
          <div className="absolute -right-6 -top-12"> {/* Adjusted positioning */}
            <img src={image} alt={name} className="w-60 h-80 object-cover" /> {/* Adjusted image size */}
          </div>
        </div>
      </div>
      <div className="absolute top-1 left-6">
        <span className="text-yellow-600 font-semibold">{generation}</span>
      </div>
    </div>
  );
};



export default MemberCard;
