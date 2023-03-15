import React from "react";
import { SelectedPage } from "../../shared/Types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const benefits = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer citation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,

      title: "100's of Diverse Classes",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <div>
      <div>
        {benefits.map((benefit, i) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
};

export default Benefits;
