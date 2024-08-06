import { useState, useEffect } from "react";
import { ThemedText } from "../themedtext/ThemedText";
import { NavbarProps } from "./Navbar.types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../lib/store";
import { setIsDarkMode } from "../../lib/features/statusinfo/statusInfoSlices";
import ToggleSwitch from "../toggleswitch/ToggleSwitch";

export const Navbar: React.FC<NavbarProps> = ({
  onClickAbout,
  onClickHome,
  onClickProjects,
  focusedSection,
}) => {
  const [activeButton, setActiveButton] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  const [isEnabled, setIsEnabled] = useState<boolean>(isDarkMode);

  useEffect(() => {
    if (focusedSection === "Home") {
      setActiveButton("Home");
    } else if (focusedSection === "About") {
      setActiveButton("About");
    } else if (focusedSection === "Projects") {
      setActiveButton("Projects");
    }
  }, [focusedSection]);

  const handleButtonClick = (buttonName: string) => {
    if (buttonName === "Home") {
      onClickHome();
    } else if (buttonName === "About") {
      onClickAbout();
    } else if (buttonName === "Projects") {
      onClickProjects();
    }

    setActiveButton(buttonName);
    setIsMenuOpen(false);
  };

  const handleToggle = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(setIsDarkMode(isEnabled));
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${
        isDarkMode ? "bg-darkmode-bgcolor" : "bg-white"
      } z-10 fixed w-full h-navbar-custom flex flex-row items-center justify-between p-5`}
    >
      {isMenuOpen ? (
        ""
      ) : (
        <>
          <a href="/" className="flex items-center">
            <img
              src={`${
                isDarkMode
                  ? "../../src/assets/logo-white.png"
                  : "../../src/assets/logo-dark.png"
              }`}
              className="h-navbar-logo-sm-custom sm:h-navbar-logo-sm-custom md:h-navbar-logo-md-custom lg:h-navbar-logo-lg-custom xl:h-navbar-logo-lg-custom 2xl:h-navbar-logo-lg-custom"
            />
            <div
              className={`w-1 h-navbar-horizontal-line-sm-custom sm:h-navbar-horizontal-line-sm-custom md:h-navbar-horizontal-line-md-custom lg:h-navbar-horizontal-line-lg-custom xl:h-navbar-horizontal-line-lg-custom 2xl:h-navbar-horizontal-line-lg-custom ${
                isDarkMode ? "bg-white" : "bg-black"
              }`}
            />
            <ThemedText
              text="bohari.ambulo"
              className="font-bold text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-5"
            />
          </a>
        </>
      )}

      <div
        className={`${
          isMenuOpen
            ? "flex w-screen h-screen absolute top-5 right-5"
            : "hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex"
        } ${
          isDarkMode ? "bg-darkmode-bgcolor" : "bg-white"
        } flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center gap-10 z-10`}
      >
        <div className="flex-row flex w-full justify-between">
          <div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
          <button
            className={`relative ${
              activeButton === "Home"
                ? isDarkMode
                  ? "border-b-2 border-white"
                  : "border-b-2 border-black"
                : ""
            } hover:border-b-2 focus:border-b-2 ${
              isDarkMode
                ? "hover:border-white focus:border-white"
                : "hover:border-black focus:border-black"
            }`}
            onClick={() => handleButtonClick("Home")}
          >
            <ThemedText
              text="Home"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <div
            className={`${
              isMenuOpen
                ? "block sm:block md:block lg:hidden xl:hidden 2xl:hidden"
                : "hidden"
            }`}
          >
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <ThemedText
                text="✖"
                className="text-2xl hover:cursor-pointer text-red-500"
              />
            </button>
          </div>
        </div>
        <div className="flex-row flex w-full justify-between">
          <div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
          <button
            className={`relative ${
              activeButton === "About"
                ? isDarkMode
                  ? "border-b-2 border-white"
                  : "border-b-2 border-black"
                : ""
            } hover:border-b-2 focus:border-b-2 ${
              isDarkMode
                ? "hover:border-white focus:border-white"
                : "hover:border-black focus:border-black"
            }`}
            onClick={() => handleButtonClick("About")}
          >
            <ThemedText
              text="About"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <div className="w-navbar-dummy-width block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
        </div>

        <div className="flex-row flex w-full justify-between">
          <div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
          <button
            className={`relative ${
              activeButton === "Projects"
                ? isDarkMode
                  ? "border-b-2 border-white"
                  : "border-b-2 border-black"
                : ""
            } hover:border-b-2 focus:border-b-2 ${
              isDarkMode
                ? "hover:border-white focus:border-white"
                : "hover:border-black focus:border-black"
            }`}
            onClick={() => handleButtonClick("Projects")}
          >
            <ThemedText
              text="Projects"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <div className="w-navbar-dummy-width block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
        </div>
        <div className="flex-row flex w-full justify-between">
          <div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
          <button
            className={`relative ${
              activeButton === "Contact"
                ? isDarkMode
                  ? "border-b-2 border-white"
                  : "border-b-2 border-black"
                : ""
            } hover:border-b-2 focus:border-b-2 ${
              isDarkMode
                ? "hover:border-white focus:border-white"
                : "hover:border-black focus:border-black"
            }`}
            onClick={() => handleButtonClick("Contact")}
          >
            <ThemedText
              text="Contact"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <div className="w-navbar-dummy-width block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
        </div>
        <div className="flex-row flex w-full justify-between">
          <div className="block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
          <ToggleSwitch isDarkMode={isDarkMode} onToggle={handleToggle} />{" "}
          <div className="w-navbar-dummy-width block sm:block md:block lg:hidden xl:hidden 2xl:hidden"></div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "hidden"
            : "block sm:block md:block lg:hidden xl:hidden 2xl:hidden"
        }`}
      >
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <ThemedText text="☰" className="text-2xl hover:cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};
