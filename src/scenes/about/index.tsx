import { motion } from "framer-motion";
import SideProfile from "@/assets/sideProfile.jpeg";
import { SelectedPage } from "@/shared/types";
import { meilensteine } from "./meilensteine";
import Meilenstein from "./Meilenstein";

type AboutProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 1,
    },
  },
};

function About({ setSelectedPage }: AboutProps) {
  return (
    <motion.section
      id="uebermich"
      className="relative min-h-max overflow-clip py-8 sm:min-h-screen"
      onViewportEnter={() => setSelectedPage(SelectedPage.UeberMich)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src={SideProfile}
        alt="Seitenprofil Jan Reiche"
        className="absolute h-full w-full object-cover object-left blur-md md:scale-125 md:object-center"
      />
      <h2 className="text-primary relative left-1/12 mb-4 text-3xl font-semibold sm:left-1/5 md:left-1/4">
        Über mich
      </h2>
      <motion.ol
        className="border-success relative left-1/12 max-w-xs border-s pt-12 pb-8 sm:left-1/5 sm:max-w-lg md:left-1/4 md:max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {meilensteine.map((meilenstein) => (
          <Meilenstein
            key={meilenstein.beschreibung}
            date={meilenstein.date}
            beschreibung={meilenstein.beschreibung}
            details={meilenstein.details}
          />
        ))}
      </motion.ol>
    </motion.section>
  );
}

export default About;
