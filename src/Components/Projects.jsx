import { useContext, useState, useEffect } from "react";
import PortfolioContext from "../Context/PortfolioContext";

import Project from "./Project";

const Projects = () => {
  const { skills, projects } = useContext(PortfolioContext);

  const [selectedTab, setSelectedTab] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  const filterProjects = (id) => {
    setSelectedTab(id);
    if (id === "all") {
      setFilteredProjects(projects);
    } else {
      const newProjects = projects.filter((project) => {
        return project.skill.id === id;
      });
      setFilteredProjects(newProjects);
    }
  };

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  return (
    <div className="container mx-auto">
      <nav
        className="
        relative
        w-full
        overflow-x-auto
        mb-12
        border-b-2 border-light-tail-100
        dark:text-dark-navy-100
      "
      >
        <ul className="inline-flex">
          <li className="cursor-pointer capitalize m-4">
            <button
              onClick={() => filterProjects("all")}
              className={`${
                selectedTab === "all"
                  ? "bg-accent"
                  : "bg-light-tail-500 dark:bg-dark-navy-100"
              } w-32
              text-center
              px-5
              py-2
              hover:bg-accent
              text-white
              rounded-md
              transition`}
            >
              All
            </button>
          </li>
          {skills.map((projectSkill) => {
            return (
              <li
                className="cursor-pointer capitalize m-4"
                key={projectSkill.id}
              >
                <button
                  onClick={() => filterProjects(projectSkill.id)}
                  className={`${
                    selectedTab === projectSkill.id
                      ? "bg-accent"
                      : "bg-light-tail-500 dark:bg-dark-navy-100"
                  } w-32
              text-center
              px-5
              py-2
              hover:bg-accent
              text-white
              rounded-md
              transition`}
                >
                  {projectSkill.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="grid gap-y-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
        {filteredProjects.map((item) => {
          return <Project project={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};
export default Projects;
