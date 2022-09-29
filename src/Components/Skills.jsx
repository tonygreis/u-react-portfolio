import { useContext } from "react";
import PortfolioContext from "../Context/PortfolioContext";

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  return (
    <section className="bg-light-tail-100 dark:bg-dark-navy-500 py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-col">
          {skills.map((skill) => {
            return (
              <div className="flex items-center justify-center" key={skill.id}>
                <img src={skill.image} className="lg:h-20" alt={skill.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
