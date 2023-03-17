import HText from "../../shared/HText";
import { SelectedPage } from "../../shared/Types";
import Form from "./Form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import EvolveText from "../../assets/EvolveText.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const ContactUS = ({ setSelectedPage }: Props) => {
  return (
    <div id="contactus" className="w-full py-14">
      <div>
        <div className="mx-auto w-5/6">
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:w-3/5"
          >
            <HText>
              <span className="text-primary-500">JOIN NOW </span>TO GET IN SHAPE
            </HText>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati est ipsam nemo voluptatem tenetur placeat doloribus
              temporibus?
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-6 w-5/6 justify-between md:flex">
          <Form />
          <div>
            <div className="relative">
              <img src={ContactUsPageGraphic} alt="ContactUsPageGraphic" />
            </div>
            <div className="absolute right-5">
              <img src={EvolveText} alt="EvolveText" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
