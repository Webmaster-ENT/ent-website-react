import {
  PenTool,
  FileText,
  Camera,
  Video,
  Palette,
  Calendar,
  Code,
  type LucideIcon,
} from "lucide-react";

export type PortfolioRequirements = {
  division: string;
  icon: LucideIcon;
  portfolio: string;
  color: string;
};

export const portfolioRequirements: PortfolioRequirements[] = [
  {
    division: "Reporter",
    icon: PenTool,
    portfolio: "1 artikel + 1 video perkenalan",
    color: "bg-blue-500",
  },
  {
    division: "Copywriter",
    icon: FileText,
    portfolio: "1 artikel (400-600 kata)",
    color: "bg-green-500",
  },
  {
    division: "Fotografer",
    icon: Camera,
    portfolio: "6 foto (2 human interest + 3 event + 1 terbaik)",
    color: "bg-purple-500",
  },
  {
    division: "Videografer",
    icon: Video,
    portfolio: "1 video perkenalan (max 1 menit)",
    color: "bg-red-500",
  },
  {
    division: "Desain Grafis",
    icon: Palette,
    portfolio: "3 desain Feed Instagram + portofolio",
    color: "bg-yellow-500",
  },
  {
    division: "Illustrator",
    icon: PenTool,
    portfolio: "CV + Ilustrasi 2D/3D tema Hari Pendidikan",
    color: "bg-indigo-500",
  },
  {
    division: "Perencanaan Konten",
    icon: Calendar,
    portfolio: "1 video portrait (1-1.30 menit)",
    color: "bg-pink-500",
  },
  {
    division: "Webmaster",
    icon: Code,
    portfolio: "Landing page + screenshot + file website",
    color: "bg-teal-500",
  },
];
