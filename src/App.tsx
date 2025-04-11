import Navbar from "@/scenes/navbar";

import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Start
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
        <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <div className="h-screen"></div>
      </main>
    </div>
  );
}

export default App;
