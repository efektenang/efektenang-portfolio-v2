import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-2 lg:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Fullstack Web Developer",
    description:
      "Develop responsive and interactive user interfaces, manage server-side logic and backend services, integrate frontend elements with backend.",
    link: "#fullstack",
  },
  {
    title: "MVC Implementation",
    description:
      "Design pattern commonly used in software development to separate the codebase into three interconnected components, making it easier to manage, scale, and maintain the application",
    link: "#MVC",
  },
  {
    title: "IT Support",
    description:
      "Creating network planning and topology, implementing network security, and managing IP address allocation, VLANs, and routing",
    link: "#IT",
  },
  {
    title: "Building REST API",
    description:
      "Offering a strong foundation in building RESTFUL API, web development with a proven ability to drive efficiency, deliver successful outcomes.",
    link: "#api",
  },
];
