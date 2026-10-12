export type Category = "Web" | "IA" | "Design" | "Social";
export type Formation = {
  id: string;
  number: string;
  category: Category;
  title: string;
  price: number;
  tagline: string;
  description: string;
  program: string[];
  project: string;
  visual: "web" | "ia" | "design" | "social";
  beaconsUrl: string | null;
};
