import React from "react";
import { SelectedPage } from "../../shared/Types";
import Logo from "../../assets/Logo.png";

type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const Footer = (props: Props) => {
  return ( 
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto md:flex w-5/6 gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            id eligendi! Modi cum sed excepturi numquam, consequuntur inventore
            culpa aspernatur ad? Saepe possimus accusantium obcaecati porro
            nulla minus impedit animi.
          </p>
          <p>© 2023 Evogym Fitness. All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 ">Saepe possimus accusantium</p>
          <p className="my-5 ">sed excepturi numquam</p>
          <p className="my-5 ">obcaecati porro nulla</p>
          <p>amet consectetur </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5 ">Lorem ipsum dolor</p>
          <p className="my-5 ">iakk hah jooo</p>
          <p>(977) 9876543210 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
