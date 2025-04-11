import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HeroImage from "@/assets/Behandlung2.jpeg";

type HomeProps = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Home({ selectedPage, setSelectedPage }: HomeProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="md:h-screen md:pb-0 py-20" id="home">
      <div className="flex flex-col h-full md:flex-row">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={HeroImage}
            alt="Eine Person erhält eine Reiki-Behandlung"
            className="md:h-full md:object-cover md:object-center w-full"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center gap-12 px-4 text-center md:px-10">
          <h1 className="text-4xl">
            Reiki Meister <br /> <span className="text-6xl">Jan Reiche</span>
          </h1>
          <p>
            Hier ein totaaaal inspirierender Satz.... Lorem ipsum dolor sit amet
            consectetur adipisicing elit..
          </p>
        </div>
      </div>{" "}
    </section>
  );
}

export default Home;
