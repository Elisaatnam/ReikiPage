import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
// import { useForm } from "react-hook-form";
import zenImg from "@/assets/zen.jpg";
import { useForm } from "react-hook-form";

type ContactProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Contact({ setSelectedPage }: ContactProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <motion.section
      id="kontakt"
      onViewportEnter={() => setSelectedPage(SelectedPage.Kontakt)}
      className="mx-auto min-h-screen w-5/6 pt-24 pb-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="basis-3/5 text-3xl font-bold">
          Nimm jetzt Kontakt auf!
        </h3>
        <p className="text-base-content my-5">
          Hier kann noch weiterer Text stehen wenn du magst....
        </p>
      </motion.div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
          className="mt-10 grow-4 basis-3/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={handleSubmit}
            method="POST"
            action="hier muss deine email adresse rein!, dann bekommst du eine besteaetigungsmail und dannach kommt hier der anonyme link rein"
          >
            <input
              type="text"
              className="bg-info text-base-100 w-full rounded-lg px-4 py-2"
              placeholder="Dein Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-warning text-sm">
                {errors.name.type === "required" &&
                  "Dieses Feld ist erforderlich."}
                {errors.name.type === "maxLength" &&
                  "Maximale Länge ist 100 Zeichen."}
              </p>
            )}
            <input
              type="email"
              placeholder="Deine E-Mail"
              className="bg-info text-base-100 mt-4 w-full rounded-lg px-4 py-2"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-warning text-sm">
                {errors.email.type === "required" &&
                  "Dieses Feld ist erforderlich."}
                {errors.email.type === "pattern" && "Ungültige E-Mail-Adresse."}
              </p>
            )}
            <textarea
              className="bg-info text-base-100 mt-4 w-full rounded-lg px-4 py-2"
              placeholder="Deine Nachricht"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-warning text-sm">
                {errors.message.type === "required" &&
                  "Dieses Feld ist erforderlich."}
                {errors.message.type === "maxLength" &&
                  "Maximale Länge ist 2000 Zeichen."}
              </p>
            )}
            <button
              type="submit"
              className="bg-info text-neutral-content hover:bg-accent mt-4 cursor-pointer rounded-lg px-4 py-2 transition duration-500 hover:scale-105 hover:transform"
            >
              Senden
            </button>
          </form>
        </motion.div>
        <motion.div
          className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={zenImg} alt="hier Bildbeschreibung rein" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
