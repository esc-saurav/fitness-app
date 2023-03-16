import Navbar from "./scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/Types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [isTopofPage, setIsTopofPage] = useState<Boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopofPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopofPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 ">
      <Navbar
        isTopofPage={isTopofPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
