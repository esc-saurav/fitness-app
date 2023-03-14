import Navbar from "./scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "./shared/Types";
function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
    <div className="app bg-gray-20 ">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
