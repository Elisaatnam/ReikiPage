import HeroImage from "@/assets/Behandlung2.jpeg";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type HomeProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Home({ setSelectedPage }: HomeProps) {
  return (
    <motion.section
      className="md:h-screen md:pb-0 py-16 md:py-24"
      id="home"
      onViewportEnter={() => setSelectedPage(SelectedPage.Start)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className=" h-full md:flex">
        {/* Image */}
        <div className="basis-1/2">
          <img
            src={HeroImage}
            alt="Eine Person erhält eine Reiki-Behandlung"
            className="md:h-full md:object-cover md:object-center w-full mb-10"
          />
        </div>

        <div className="basis-1/2 flex flex-col items-center justify-center gap-12 px-4 text-center md:px-10">
          <motion.h1
            className="text-xl md:text-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Reiki Meister <br />
            <span className="text-4xl md:text-6xl">Jan Reiche</span>
          </motion.h1>
          <motion.p
            className="text-base-content md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Erfahre die transformative Kraft der Energie – für Körper, Geist und
            Seele.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Bereit für mehr?
            </ActionButton>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
