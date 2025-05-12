import { motion } from "framer-motion";
import SideProfile from "@/assets/sideProfile.jpeg";
import { SelectedPage } from "@/shared/types";

type AboutProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function About({ setSelectedPage }: AboutProps) {
  return (
    <motion.section
      id="uebermich"
      className="relative min-h-screen overflow-clip"
      onViewportEnter={() => setSelectedPage(SelectedPage.UeberMich)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src={SideProfile}
        alt="Seitenprofil Jan Reiche"
        className="absolute h-full w-full object-cover object-left blur-md md:scale-125 md:object-center"
      />
      <ol className="relative left-1/6 max-w-sm border-s border-gray-200 pt-12 sm:left-1/5 sm:max-w-lg md:left-1/4 md:max-w-3xl dark:border-gray-700">
        <li className="ms-4 mb-10">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
            Juni 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Meistergrad Reiki
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi
            nam qui veniam exercitationem laborum dicta odit, omnis totam
            libero, delectus beatae harum tempore doloribus dolorum nostrum. Ea,
            facere quia!
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            optional ein Link...{" "}
            <svg
              className="ms-2 h-3 w-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </li>
        <li className="ms-4 mb-10">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
            März 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Eine weiterer Meilenstein
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            doloremque debitis adipisci fugiat quibusdam aliquid soluta possimus
            quas incidunt voluptates voluptas dolores, sit qui eius ex. Fugiat
            vitae dolore quisquam.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm leading-none font-normal text-gray-400 dark:text-gray-500">
            Oktober 2019
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Ein weiterer Meilenstein
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quia, quos quae quibusdam quod quas quasi quidem quam quisquam quos
          </p>
        </li>
      </ol>
    </motion.section>
  );
}

export default About;
