import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type ActionButtonProps = {
  children: React.ReactNode;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function ActionButton({ children, setSelectedPage }: ActionButtonProps) {
  return (
    <AnchorLink
      className="bg-neutral text-neutral-content hover:bg-info rounded-lg px-10 py-3 transition duration-500"
      onClick={() => setSelectedPage(SelectedPage.Kontakt)}
      href={`#${SelectedPage.Kontakt}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
