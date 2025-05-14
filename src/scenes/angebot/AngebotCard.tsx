import { motion } from "framer-motion";

type AngebotCardProps = {
  behandlung: string;
  preis: string;
  beschreibung: string;
};

const childVariant = {
  hidden: { opacity: 0.25, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function AngebotCard({ behandlung, preis, beschreibung }: AngebotCardProps) {
  return (
    <motion.article
      variants={childVariant}
      className="border-primary bg-accent-content hover:bg-base-300 flex h-72 w-72 flex-col items-center justify-evenly rounded-lg border-2 p-4 text-center transition-all duration-500 hover:z-10 hover:scale-105 hover:transform sm:h-80 sm:w-80"
    >
      <div className="flex h-1/3 flex-col items-center gap-8 p-4">
        <h2 className="text-xl font-medium">{behandlung}</h2>
        <p className="italic">{preis} €</p>
      </div>

      <p className="flex h-2/3 items-center">{beschreibung}</p>
    </motion.article>
  );
}

export default AngebotCard;
