import { behandlungen } from "@/shared/behandlungen";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AngebotCard from "./AngebotCard";

type AngebotProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.75,
    },
  },
};

function Angebot({ setSelectedPage }: AngebotProps) {
  return (
    <motion.section
      className="bg-base-200 flex min-h-[80vh] flex-col items-center justify-center gap-16 py-8"
      id="angebot"
      onViewportEnter={() => setSelectedPage(SelectedPage.Angebot)}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold">Angebot</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="flex w-full flex-wrap items-center justify-center gap-8"
      >
        {behandlungen.map((behandlung) => (
          <AngebotCard
            behandlung={behandlung.behandlung}
            preis={behandlung.preis}
            beschreibung={behandlung.beschreibung}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Angebot;
