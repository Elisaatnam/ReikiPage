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
      className="border-info bg-info-container hover:bg-success flex flex-col items-center justify-evenly rounded-lg border-2 p-4 text-center transition-all duration-500 hover:z-10 hover:scale-105 hover:transform"
      variants={childVariant}
    >
      <p className="flex h-52 items-center justify-center">{description}</p>
      <img src={icon} alt="icon" className="h-40 w-auto" />
    </motion.div>
  );
}

export default ReikiCard;
