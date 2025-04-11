import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type ActionButtonProps = {
  children: React.ReactNode;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function ActionButton({ children, setSelectedPage }: ActionButtonProps) {
  return (
    <AnchorLink
      className="rounded-lg bg-neutral text-neutral-content px-10 py-3 hover:bg-info  duration-500 transition"
      onClick={() => setSelectedPage(SelectedPage.Kontakt)}
      href={`#${SelectedPage.Kontakt}`}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
