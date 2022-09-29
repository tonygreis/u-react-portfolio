import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const getSkills = async () => {
    const apiSkills = await axios.get("skills");
    setSkills(apiSkills.data.data);
  };

  const getProjects = async () => {
    const apiProjects = await axios.get("projects");
    setProjects(apiProjects.data.data);
  };

  useEffect(() => {
    getSkills();
  }, []);
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <PortfolioContext.Provider value={{ skills, projects }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
