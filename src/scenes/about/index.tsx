import { motion } from "framer-motion";
import SideProfile from "../../assets/sideProfile.jpeg";
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
        className="absolute h-full w-full object-cover object-left blur-sm md:scale-125 md:object-center"
      />
      <h2 className="absolute top-1/2 right-1/2 bottom-1/2 left-1/2 z-10">
        About...
      </h2>
    </motion.section>
  );
}

export default About;
