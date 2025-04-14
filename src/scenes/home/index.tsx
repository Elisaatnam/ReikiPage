import HeroImage from "@/assets/Behandlung2.jpeg";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

type HomeProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Home({ setSelectedPage }: HomeProps) {
  return (
    <section className="md:h-screen md:pb-0 py-16 md:py-24" id="home">
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
          <h1 className="text-xl md:text-4xl">
            Reiki Meister <br />
            <span className="text-4xl md:text-6xl">Jan Reiche</span>
          </h1>
          <p className="text-base-content md:text-lg">
            Erfahre die transformative Kraft der Energie – für Körper, Geist und
            Seele.
          </p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Bereit für mehr?
          </ActionButton>
        </div>
      </div>
    </section>
  );
}

export default Home;
