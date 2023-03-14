import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../shared/Types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const Button = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      className=" rounded-md bg-secondary-500 px-10 py-2 text-white hover:bg-primary-500 "
    >
      {children}
    </AnchorLink>
  );
};

export default Button;
