import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/Types";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: JSX.Element;
  description: string;
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Benefit = ({ title, icon, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariants}
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 bg-primary-100 p-4">{icon}</div>
      </div>
      <h1 className="font-bold">{title}</h1>
      <p className="my-3">{description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      >
        Learn More
      </AnchorLink>{" "}
    </motion.div>
  );
};

export default Benefit;
