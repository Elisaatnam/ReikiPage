import { ReikiInfoElt, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { reikiInfosArr } from "./ReikiInfos";
import ReikiCard from "./ReikiCard";

type WasIstReikiProps = {
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

function WasIstReiki({ setSelectedPage }: WasIstReikiProps) {
  return (
    <motion.section
      id="wasistreiki"
      className="flex flex-col gap-4 md:flex-row md:gap-16 pt-24 md:min-h-screen px-10 md:px-24"
      onViewportEnter={() => setSelectedPage(SelectedPage.WasIstReiki)}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.article
        className="flex items-center justify-center basis-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-xl">
          <span className="font-bold italic text-info">Reiki</span> ist eine
          sanfte, aus Japan stammende Energieheilungsmethode, die durch das
          Auflegen der Hände praktiziert wird.
        </p>
      </motion.article>
      <motion.article
        className="basis-2/3 grid sm:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {reikiInfosArr.map((elt: ReikiInfoElt) => (
          <ReikiCard
            key={elt.id}
            description={elt.description}
            icon={elt.icon}
          />
        ))}
      </motion.article>
    </motion.section>
  );
}

export default WasIstReiki;
