import "./App.css";
import Header from "./components/Header";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primeicons/primeicons.css";
import SideBar from "./components/SideBar";
import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);

  function openMenu() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <PrimeReactProvider>
        <div>
          <Header showSideBar={openMenu} />
        </div>
          <div className="flex h-full">
            <SideBar visible={isVisible} />
          </div>
      </PrimeReactProvider>
    </>
  );
}

export default App;
