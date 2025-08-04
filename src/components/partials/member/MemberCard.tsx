interface MemberCardProps {
  id: number;
  generation: string;
  name: string;
  role: string;
  major: string;
  image: string;
  isActive: boolean;
  divisionColor?: 'green' | 'blue' | 'pink' | 'yellow' | 'purple' | 'red' | 'orange' | 'cyan';
}

const MemberCard = ({ generation, name, role, major, image, isActive, divisionColor }: MemberCardProps) => {
  const majorWords = major.split(' ');
  const majorLine1 = majorWords[0];
  const majorLine3 = majorWords.slice(-2).join(' ');
  const majorLine2 = majorWords.slice(1, -2).join(' ');

  // Color mapping for division backgrounds
  const colorClasses = {
    green: 'bg-green-200',
    blue: 'bg-blue-200',
    pink: 'bg-pink-200',
    yellow: 'bg-yellow-200',
    purple: 'bg-purple-200',
    red: 'bg-red-200',
    orange: 'bg-orange-200',
    cyan: 'bg-cyan-200'
  };

  const textColorClasses = {
  green: 'text-green-600',
  blue: 'text-blue-600',
  pink: 'text-pink-600',
  yellow: 'text-yellow-600',
  purple: 'text-purple-600',
  red: 'text-red-600',
  orange: 'text-orange-600',
  cyan: 'text-cyan-600'
};


  return (
    <div className={`relative transition-transform duration-500 ${isActive ? 'scale-105' : 'scale-90'}`}>
      <div className={`w-90 h-75 ${divisionColor ? colorClasses[divisionColor] : ''}  rounded-3xl p-6 flex items-end relative`}>
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
          <div className="absolute -right-6 -bottom-6"> {/* Adjusted positioning */}
            <img src={image} alt={name} className="w-50 h-70 object-cover rounded-3xl" /> {/* Adjusted image size */}
          </div>
        </div>
      </div>
      <div className="absolute top-1 left-9">
        <span className={`font-semibold ${divisionColor ? textColorClasses[divisionColor] : ''}`}>
          {generation}
        </span>
      </div>
    </div>
  );
};



export default MemberCard;
