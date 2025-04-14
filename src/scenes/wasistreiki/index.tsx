import HandsIcon from "@/assets/handIcon.png";

function WasIstReiki() {
  return (
    <section
      id="wasistreiki"
      className="flex flex-col gap-4 md:flex-row md:gap-16 pt-24 md:min-h-screen px-10 md:px-24"
    >
      <article className="flex items-center justify-center basis-1/3">
        <p className="text-xl">
          <span className="font-bold italic text-info">Reiki</span> ist eine
          sanfte, aus Japan stammende Energieheilungsmethode, die durch das
          Auflegen der Hände praktiziert wird.
        </p>
      </article>
      <article className="basis-2/3 grid sm:grid-cols-2 gap-4">
        <div className="border-2 border-info rounded-lg p-4 flex flex-col items-center justify-evenly text-center bg-info-container hover:transform hover:scale-105 hover:z-10 transition-all duration-500 hover:bg-success">
          <p className="h-52 flex items-center justify-center">
            Beschreibe, wie die Energie dorthin fließt, wo sie im Körper des
            Empfängers benötigt wird, um Blockaden zu lösen und das
            Gleichgewicht wiederherzustellen
          </p>
          <img src={HandsIcon} alt="icon" className="h-40 w-auto" />
        </div>
        <div className="border-2 border-info rounded-lg p-4 flex flex-col items-center justify-evenly text-center bg-info-container hover:transform hover:scale-105 hover:z-10 transition-all duration-500 hover:bg-success">
          <p className="h-52 flex items-center justify-center">
            Weise darauf hin, dass die Erfahrungen mit Reiki sehr individuell
            sein können.
          </p>
          <img src={HandsIcon} alt="icon" className="h-40 w-auto" />
        </div>
        <div className="border-2 border-info rounded-lg p-4 flex flex-col items-center justify-evenly text-center bg-info-container hover:transform hover:scale-105 hover:z-10 transition-all duration-500 hover:bg-success">
          <p className="h-52 flex items-center justify-center">
            Erkläre, dass Reiki für Menschen jeden Alters und in verschiedenen
            Lebenssituationen geeignet ist.
          </p>
          <img src={HandsIcon} alt="icon" className="h-40 w-auto" />
        </div>
        <div className="border-2 border-info rounded-lg p-4 flex flex-col items-center justify-evenly text-center bg-info-container hover:transform hover:scale-105 hover:z-10 transition-all duration-500 hover:bg-success">
          <p className="h-52 flex items-center justify-center">
            Nenne Beispiele, wie Stress, Erschöpfung, Schlafprobleme, emotionale
            Belastungen, Schmerzen oder einfach zur Förderung des allgemeinen
            Wohlbefindens.
          </p>
          <img src={HandsIcon} alt="icon" className="h-40 w-auto" />
        </div>
      </article>
    </section>
  );
}

export default WasIstReiki;
