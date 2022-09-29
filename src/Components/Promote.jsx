const Promote = () => {
  return (
    <section className="bg-light-tail-100 dark:bg-dark-navy-500 py-6">
      <div className="mx-auto max-w-7xl">
        <div
          className="
          py-12
          px-4
          sm:px-6
          lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8
        "
        >
          <h2
            className="
            text-3xl
            font-bold
            tracking-tight
            text-light-tail-500
            dark:text-dark-navy-100
            sm:text-4xl
          "
          >
            <span className="block">Ready to dive in?</span>
            <span className="block text-black dark:text-white">
              Laravel 9 Admin Panel - Learn Roles and Permissions.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://www.udemy.com/course/laravel-9-admin-panel-learn-roles-and-permissions/"
                className="
                inline-flex
                items-center
                justify-center
                rounded-md
                border border-transparent
                bg-light-primary
                dark:bg-dark-primary
                px-5
                py-3
                text-base
                font-medium
                text-black
                dark:text-white
                hover:bg-light-secondary
                dark:hover:bg-dark-secondary
              "
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Promote;
