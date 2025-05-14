function Footer() {
  return (
    <footer className="bg-accent">
      <div className="mx-auto w-full p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-10" alt="Logo" />
            <span className="text-base-content self-center text-2xl font-semibold whitespace-nowrap">
              Gurujan
            </span>
          </a>
          <ul className="text-base-content mb-6 flex flex-wrap items-center text-sm font-medium transition">
            <li>
              <a
                href="#"
                className="hover:text-info duration-500-conten me-4 hover:underline md:me-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-info duration-500-conten me-4 hover:underline md:me-6"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="text-base-content block text-xs sm:text-center">
          <a
            href="https://github.com/Elisaatnam"
            target="_blank"
            className="hover:underline"
          >
            © 2025 - elisaatnam
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
