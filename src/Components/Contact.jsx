import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await axios.post("contact", formValues);
      setFormValues({
        name: "",
        email: "",
        body: "",
      });
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };
  return (
    <section
      id="contact"
      className="section bg-light-primary dark:bg-dark-primary"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">Contact Me</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-x-8">
          <div
            className="
            flex flex-1 flex-col
            items-start
            space-y-8
            mb-12
            lg:mb-0 lg:pt-2
          "
          >
            <div className="flex flex-col lg:flex-row gap-x-4">
              <div
                className="
                text-accent
                rounded-sm
                w-14
                h-14
                flex
                items-start
                justify-center
                mt-2
                mb-4
                lg:mb-0
                text-2xl
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-body text-xl mb-1">Have a question?</h4>
                <p className="text-paragraph mb-1">I am here to help you.</p>
                <p className="text-accent font-normal">
                  Email me at john@doe.com
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-4">
              <div
                className="
                text-accent
                rounded-sm
                w-14
                h-14
                flex
                items-start
                justify-center
                mt-2
                mb-4
                lg:mb-0
                text-2xl
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-body text-xl mb-1">My current location</h4>
                <p className="text-paragraph mb-1">Tirana, Albania.</p>
                <p className="text-accent font-normal">
                  Serving clients worldwide.
                </p>
              </div>
            </div>
          </div>
          <form onSubmit={submitForm} className="space-y-8 w-full max-w-md">
            {showMessage && (
              <div
                className="
              p-4
              text-sm text-light-tail-100
              bg-light-tail-500
              dark:bg-dark-navy-100
              rounded-lg
              dark:text-dark-navy-500
            "
                role="alert"
              >
                <div className="max-w-7xl mx-auto">
                  Thank you for contactin me.
                </div>
              </div>
            )}

            <div className="flex gap-8">
              <div>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={formValues["name"]}
                  onChange={onChange}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-sm text-red-400">{errors.name[0]}</span>
                )}
              </div>
              <div>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formValues["email"]}
                  onChange={onChange}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-sm text-red-400">
                    {errors.email[0]}
                  </span>
                )}
              </div>
            </div>
            <textarea
              name="body"
              value={formValues["body"]}
              onChange={onChange}
              className="textarea"
              placeholder="Your message"
              spellCheck="false"
            ></textarea>
            {errors.body && (
              <span className="text-sm text-red-400">{errors.body[0]}</span>
            )}
            <button
              type="submit"
              className="
              btn btn-lg
              bg-accent
              hover:bg-light-secondary
              dark:bg-dark-secondary
              text-black
              dark:text-white
              hover:text-light-tail-500
              dark:hover:text-dark-navy-100
            "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
