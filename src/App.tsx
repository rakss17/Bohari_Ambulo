import { useRef, useState, useEffect } from "react";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Navbar } from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  const [focusedSection, setFocusedSection] = useState<string>("");
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.9],
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === homeRef.current) {
            setFocusedSection("Home");
          } else if (entry.target === aboutRef.current) {
            setFocusedSection("About");
          } else if (entry.target === projectsRef.current) {
            setFocusedSection("Projects");
          }
        } else {
          if (entry.target === homeRef.current && focusedSection === "Home") {
            setFocusedSection("");
          } else if (
            entry.target === aboutRef.current &&
            focusedSection === "About"
          ) {
            setFocusedSection("");
          } else if (
            entry.target === projectsRef.current &&
            focusedSection === "Projects"
          ) {
            setFocusedSection("");
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, [focusedSection]);

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

  const scrollToProject = () => {
    if (projectsRef.current) {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div
      className={`w-screen h-auto flex flex-col ${
        isDarkMode ? "bg-darkmode-bgcolor" : "bg-white"
      }`}
    >
      <Navbar
        focusedSection={focusedSection}
        onClickHome={scrollToHome}
        onClickAbout={scrollToAbout}
        onClickProjects={scrollToProject}
      />
      {(focusedSection === "About" ||
        focusedSection === "Projects" ||
        focusedSection === "") && (
        <button
          className="fixed bottom-4 right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white"
          onClick={scrollToHome}
        >
          <KeyboardArrowUpOutlinedIcon />
        </button>
      )}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default App;
