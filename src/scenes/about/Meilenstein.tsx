import { motion } from "framer-motion";

type MeilensteinProps = {
  date: string;
  beschreibung: string;
  details: string;
};

const childVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Meilenstein({ date, beschreibung, details }: MeilensteinProps) {
  return (
    <motion.li
      className="bg-neutral-content/50 p4 ms-4 mb-10 rounded-2xl p-4"
      variants={childVariant}
    >
      <div className="border-info-container bg-info absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border"></div>
      <time className="text-accent mb-1 text-sm leading-none font-normal">
        {date}
      </time>
      <h3 className="text-secondary text-lg font-semibold">{beschreibung}</h3>
      <p className="mb-4 text-base font-normal text-gray-700">{details}</p>
    </motion.li>
  );
}

export default Meilenstein;
