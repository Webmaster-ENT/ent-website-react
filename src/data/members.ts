import AmelImage from '@/assets/members/amel.png'
import IkhwanImage from '@/assets/members/ikhwan.png'
import GaluhImage from '@/assets/members/galuh.png'

export interface Member {
  id: number;
  generation: 'ENT 19th Generation' | 'ENT 18th Generation' | 'ENT 17th Generation' | 'ENT 16th Generation';
  name: string;
  role: 'Videographer' | 'Reporter' | 'Webmaster' | 'Photographer' | 'Graphic Design' | 'Illustrator' | 'Copywriter' | 'Content Planner';
  major: string;
  image: string;
  isActive: boolean;
}

export const members: Member[] = [
  {
    id: 1,
    generation: "ENT 19th Generation",
    name: "Amelia",
    role: "Videographer",
    major: "Majoring Multimedia Engineering Technology '24",
    image: AmelImage,
    isActive: true,
  },
  {
    id: 2,
    generation: "ENT 19th Generation",
    name: "Ikhwan",
    role: "Videographer",
    major: "Majoring Multimedia Engineering Technology '24",
    image: IkhwanImage,
    isActive: false,
  },
  {
    id: 3,
    generation: "ENT 19th Generation",
    name: "Galuh",
    role: "Videographer",
    major: "Majoring Multimedia Engineering Technology '24",
    image: GaluhImage,
    isActive: false,
  },
  {
    id: 4,
    generation: "ENT 18th Generation",
    name: "Ali",
    role: "Videographer",
    major: "Majoring Multimedia Engineering Technology '24",
    image: GaluhImage,
    isActive: false,
  },
];