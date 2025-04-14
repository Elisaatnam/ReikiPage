import { motion } from "framer-motion";

type ReikiCardProps = {
  icon: string;
  description: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function ReikiCard({ icon, description }: ReikiCardProps) {
  return (
    <motion.div
      className="border-2 border-info rounded-lg p-4 flex flex-col items-center justify-evenly text-center bg-info-container hover:transform hover:scale-105 hover:z-10 transition-all duration-500 hover:bg-success"
      variants={childVariant}
    >
      <p className="h-52 flex items-center justify-center">{description}</p>
      <img src={icon} alt="icon" className="h-40 w-auto" />
    </motion.div>
  );
}

export default ReikiCard;
