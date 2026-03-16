import { StaticImageData } from "next/image";

export type Career = {
  id: string;
  title: string;
  name: string;
  degree: string;
  date: string;
  location: string;
  website: string;
  logo: StaticImageData;
  highlights: string[];
  technologies: string[];
};