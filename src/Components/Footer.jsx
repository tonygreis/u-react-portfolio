import Logo from "../assets/img/logo.png";
const Footer = () => {
  return (
    <footer className="bg-light-secondary dark:bg-dark-secondary py-12">
      <div className="container mx-auto">
        <div
          className="
          flex flex-col
          md:flex-row
          space-y-6
          lg:space-y-0
          items-center
          justify-between
        "
        >
          <div className="flex space-x-6 items-center justify-center">
            <img className="h-8 w-auto" src={Logo} />
          </div>
          <p className="text-paragraph opacity-75 text-[16px]">
            &copy; 2022 Laraveller.com All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
