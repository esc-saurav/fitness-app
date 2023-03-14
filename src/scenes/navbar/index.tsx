import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/Types";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../../shared/Button";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setisMenuToggled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className="fixed top-0 z-30 flex w-full items-center justify-between py-6">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            {/* Left Side */}
            <img src={Logo} alt="logo" />
            {/* right Side */}
            {isAboveMediumScreen ? (
              <div className="flex w-full items-center   justify-between">
                <div className="flex items-center justify-between gap-8 text-sm ">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact US"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between gap-8">
                  <p>Sign In</p>
                  <Button setSelectedPage={setSelectedPage}>
                    Become a member
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setisMenuToggled(!isMenuToggled)}
                className="rounded-full bg-secondary-500 p-2"
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
