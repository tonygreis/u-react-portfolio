import Projects from "./Projects";
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section bg-light-primary dark:bg-dark-primary min-h-[1400px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">My Latest Work</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
      </div>
      <Projects />
    </section>
  );
};
export default Portfolio;
