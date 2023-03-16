import React from "react";
import { ClassType, SelectedPage } from "../../shared/Types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Class from "../ourClasses/Class";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Weight training",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos laudantium, iure porro debitis deserunt! Praesentium amet veniam in pariatur sint. Iusto repellendus, ut quis eos magnam aspernatur reiciendis.",
    image: image1,
  },
  {
    name: "Fitness classes",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos laudantium, iure porro debitis deserunt! Praesentium amet veniam in pariatur sint. Iusto repellendus, ut quis eos magnam aspernatur reiciendis.",
    image: image2,
  },
  {
    name: "Ab core classes",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos laudantium, iure porro debitis deserunt! Praesentium amet veniam in pariatur sint. Iusto repellendus, ut quis eos magnam aspernatur reiciendis.",
    image: image3,
  },
  {
    name: "Yoga training",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos laudantium, iure porro debitis deserunt! Praesentium amet veniam in pariatur sint. Iusto repellendus, ut quis eos magnam aspernatur reiciendis.",
    image: image4,
  },
  {
    name: "Adventure training",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos laudantium, iure porro debitis deserunt! Praesentium amet veniam in pariatur sint. Iusto repellendus, ut quis eos magnam aspernatur reiciendis.",
    image: image5,
  },
  {
    name: "Athelete training",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore dignissimos laudantium, iure porro debitis deserunt! Praesentium amet veniam in pariatur sint. Iusto repellendus, ut quis eos magnam aspernatur reiciendis.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-14">
      <div>
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mx-auto w-5/6"
          >
            <div className="md:w-3/5">
              <HText>Our Classes</HText>
              <p className=" py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                dolore dignissimos laudantium, iure porro debitis deserunt!
                Praesentium amet veniam in pariatur sint. Iusto repellendus, ut
                quis eos magnam aspernatur reiciendis.
              </p>
            </div>
          </motion.div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType, index) => {
                return (
                  <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClasses;