import { useRef } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToHome = () => {
    if (homeRef.current) {
      setTimeout(() => {
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div
      className={`w-screen h-auto flex flex-col ${
        isDarkMode ? "bg-darkmode-bgcolor" : "bg-white"
      }`}
    >
      <Navbar onClickHome={scrollToHome} onClickAbout={scrollToAbout} />
      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>
    </div>
  );
}

export default App;
