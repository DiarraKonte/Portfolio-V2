import React from 'react';
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const listeSkills = [
  { id: 1, name: "Redux", icon: SiRedux, color: "#764ABC", stars: 2.5},
  { id: 2, name: "Next.js", icon: TbBrandNextjs, color: "#ffffff",stars: 3.5},
  { id: 3, name: "TypeScript", icon: SiTypescript, color: "#007ACC", stars: 3.5},
  { id: 4, name: "React", icon: FaReact, color: "#61DAFB",  stars: 3.5 },
  { id: 5, name: "HTML5", icon: FaHtml5, color: "#E34F26", stars: 4 },
  { id: 6, name: "CSS3", icon: FaCss3Alt, color: "#1572B6", stars: 4 },
  { id: 7, name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E", stars: 3.5 },
  { id: 8, name: "Java", icon: FaJava, color: "#007396",  stars: 3},
  { id: 9, name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4", stars: 3.5 },
  { id: 10, name: "Git", icon: FaGitAlt, color: "#F05032", stars: 3.5 },
  { id: 11, name: "GitHub", icon: FaGitAlt, color: "#181717", stars: 4 },
  { id: 12, name: "PHP", icon: FaHtml5, color: "#4F5B93", stars: 2.5 },
  { id: 13, name: "MySQL", icon: FaHtml5, color: "#4479A1", stars: 2.5 },
  { id: 14, name: "PostgreSQL", icon: FaHtml5, color: "#336791", stars: 3},
  { id: 15, name: "NodeJS", icon: FaNodeJs, color: "#FF0000", stars: 2.5 },

];

const StarRating = ({ stars, color }: { stars: number; color: string }) => {
  const starsArray = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starsArray.push(<FaStar key={i} className="text-lg" style={{ color }} />);
    } else if (i === Math.ceil(stars) && !Number.isInteger(stars)) {
      starsArray.push(<FaStarHalfAlt key={i} className="text-lg" style={{ color }} />);
    } else {
      starsArray.push(<FaRegStar key={i} className="text-lg" style={{ color }} />);
    }
  }
  
  return <div className="flex mt-1">{starsArray}</div>;
};

interface Skill {
  id: number;
  name: string;
  icon: React.ComponentType<{ className: string; style: React.CSSProperties }>;
  color: string;
  stars: number;
}

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-4 rounded-2xl group cursor-pointer relative"
    >
      {React.createElement(skill.icon, {
        className: "w-12 h-12 md:w-16 md:h-16",
        style: { color: skill.color },
      })}
      
      <p className="mt-2 font-medium text-center">{skill.name}</p>
      
      
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-xl"
      >
        <StarRating stars={skill.stars} color={skill.color} />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-16 " id='skills'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mes compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {listeSkills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;