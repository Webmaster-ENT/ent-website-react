export interface Member {
  id: number;
  generation: string;
  name: string;
  role: string;
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
    image: "/members/amel.png",
    isActive: true,
  },
  {
    id: 2,
    generation: "ENT 19th Generation",
    name: "Ikhwan",
    role: "Videographer",
    major: "Majoring Multimedia Engineering Technology '24",
    image: "/members/ikhwan.png",
    isActive: false,
  },
  {
    id: 3,
    generation: "ENT 19th Generation",
    name: "Galuh",
    role: "Videographer",
    major: "Majoring Multimedia Engineering Technology '24",
    image: "/members/galuh.png",
    isActive: false,
  },
];