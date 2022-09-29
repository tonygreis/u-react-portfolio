import AboutImg from "../assets/img/about.jpeg";
const About = () => {
  return (
    <section
      id="about"
      className="section bg-light-secondary dark:bg-dark-secondary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={AboutImg}
            alt="About img"
          />
          <div
            className="
            flex flex-col
            items-center
            text-center
            lg:items-start lg:text-left
          "
          >
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
                About Me
              </h2>
              <p className="mb-4 text-accent">
                Freelance frontend web developer.
              </p>
              <hr className="mb-8 opacity-90 dark:opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit tempore
                earum dolorum quo consequatur rem nihil hic ducimus rerum soluta
                neque harum velit molestiae dignissimos distinctio dolorum nisi
                labore culpa nihil. <br />
                <br />
                Qui doloremque quod sit accusantium unde totam inventore
                cupiditate ratione esse maxime eum recusandae ducimus.
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn-md bg-accent text-light-tail-100"
            >
              Work with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
