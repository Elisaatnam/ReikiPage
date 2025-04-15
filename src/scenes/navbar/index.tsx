import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";

type NavBarProps = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
  isTopOfPage: boolean;
};

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavBarProps) => {
  const flexBetween = "flex items-center justify-between";

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const navBarBG = isTopOfPage ? "bg-base-200" : "bg-accent drop-shadow";

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full ${navBarBG} transition-colors duration-500`}
      >
        {/* left side */}
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <AnchorLink
              href="#home"
              onClick={() => setSelectedPage(SelectedPage.Start)}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-auto w-18 object-contain md:w-28"
              />
            </AnchorLink>

            {/* inner right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full justify-end`}>
                <div className={`${flexBetween} gap-8 text-base`}>
                  <Link
                    page={"Was ist Reiki"}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Angebot"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Über mich"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Kontakt
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="bg-accent rounded-full p-3"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* //: ----- mobile menu modal ----- */}
      {!isAboveMediumScreens && (
        <div
          className={`bg-base-300 fixed right-0 bottom-0 z-40 h-full w-[275px] drop-shadow-xl transition-transform duration-500 ${isMenuToggled ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="text-primary-content h-10 w-10" />
            </button>
          </div>

          <div className="text-accent-content ml-[25%] flex flex-col gap-10 text-2xl">
            <Link
              page={"Was ist Reiki"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Angebot"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Über mich"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Kontakt"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
