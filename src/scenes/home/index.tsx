import { SelectedPage } from "../../shared/Types";
import Button from "../../shared/Button";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphics from "../../assets/HomePageGraphic.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Sponser from "./Sponser";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0" id="home">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div
                className="before:absolute before:-top-20 before:-left-20 before:z-[-1] 
              md:before:content-evolvetext"
              >
                <img src={HomePageText} alt="HomePageText" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              {" "}
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 "
          >
            <Button setSelectedPage={setSelectedPage}>Join Now</Button>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40  md:justify-items-end">
          <img src={HomePageGraphics} alt="HomePageGraphics" />
        </div>
      </motion.div>

      {isAboveMediumScreens && (
        <div className="h-[110px] w-full bg-primary-100 py-10">
          <Sponser />
        </div>
      )}
    </section>
  );
};

export default Home;
