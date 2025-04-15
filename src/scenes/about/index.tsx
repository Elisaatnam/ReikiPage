import { motion } from "framer-motion";
import SideProfile from "../../assets/sideProfile.jpeg";
import { SelectedPage } from "@/shared/types";

type AboutProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function About({ setSelectedPage }: AboutProps) {
  return (
    <motion.section
      id="about"
      className="relative overflow-clip md:min-h-screen"
      onViewportEnter={() => setSelectedPage(SelectedPage.UeberMich)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src={SideProfile}
        alt="Seitenprofil Jan Reiche"
        className="absolute h-full w-full scale-125 object-cover blur-sm"
      />
      <h1 className="absolute z-10">Hello</h1>
    </motion.section>
  );
}

export default About;
