import React from 'react';
import { 
  FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import { 
  SiC, SiGo, SiMongodb, SiSqlite, SiMysql, SiWebdriverio, SiSelenium, SiFastapi, SiArchlinux, SiGnubash, SiGnome, SiGithub, SiVisualstudiocode, SiTypescript, SiCplusplus, SiGin
} from 'react-icons/si';

interface TechItemProps {
  name: string;
  Icon: React.ElementType;
}

const TechItem: React.FC<TechItemProps> = ({ name, Icon }) => (
  <div className="flex flex-col items-center m-2 p-2 rounded-lg bg-black text-primary hover:bg-primary hover:text-black">
    <Icon className="h-12 w-12" />
    <span className="mt-2 text-sm font-medium">{name}</span>
  </div>
);

const TechStack: React.FC = () => {
  const technologies: TechItemProps[] = [
    { name: 'Java', Icon: FaJava },
    { name: 'C', Icon: SiC },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Go', Icon: SiGo },
    { name: 'Python', Icon: FaPython },
    { name: 'FastAPI', Icon: SiFastapi },
    { name: 'Gin', Icon: SiGin },
    { name: 'JavaScript', Icon: FaJs },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'React', Icon: FaReact },
    { name: 'Node.js', Icon: FaNodeJs },
    { name: 'HTML', Icon: FaHtml5 },
    { name: 'CSS', Icon: FaCss3Alt },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Git', Icon: FaGitAlt },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'SQLite', Icon: SiSqlite },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'Bash', Icon: SiGnubash },
    { name: 'Arch Linux', Icon: SiArchlinux },
    { name: 'GNOME', Icon: SiGnome },
    { name: 'VS Code', Icon: SiVisualstudiocode },
    { name: 'WebdriverIO', Icon: SiWebdriverio },
    { name: 'Selenium', Icon: SiSelenium },
    
  ];

  return (
    <div className="tech-stack">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-7/12 m-auto">
        {technologies.map((tech, index) => (
          <TechItem key={index} name={tech.name} Icon={tech.Icon} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;