import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type LinkProps = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

function Link({ page, selectedPage, setSelectedPage }: LinkProps) {
  const lowerCasePage = page
    .toLowerCase()
    .replace(
      /[äöüß]/g,
      (match: string) =>
        ({ ä: "ae", ö: "oe", ü: "ue", ß: "ss" })[match] || match,
    )
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-secondary" : ""} hover:text-info transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
