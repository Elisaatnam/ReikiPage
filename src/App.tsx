import Navbar from "@/scenes/navbar";

import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";
import WasIstReiki from "./scenes/wasistreiki";
import About from "./scenes/about";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Start,
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Start);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-base-100">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <main>
        <Home setSelectedPage={setSelectedPage} />
        <WasIstReiki setSelectedPage={setSelectedPage} />
        <div className="flex h-screen items-center justify-center">
          ...to be contiued...
        </div>
        <About setSelectedPage={setSelectedPage} />
      </main>
    </div>
  );
}

export default App;
