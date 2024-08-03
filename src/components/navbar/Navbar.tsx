import { useState } from "react";
import { ThemedText } from "../themedtext/ThemedText";
import { NavbarProps } from "./Navbar.types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../lib/store";
import { setIsDarkMode } from "../../lib/features/statusinfo/statusInfoSlices";
import ToggleSwitch from "../toggleswitch/ToggleSwitch";

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [activeButton, setActiveButton] = useState<string>("Home");
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleToggle = () => {
    setIsEnabled((previousState) => !previousState);
    dispatch(setIsDarkMode(isEnabled));
  };

  return (
    <>
      <div className="bg-transparent w-screen h-navbar-custom flex flex-row items-center justify-between">
        <div className="flex items-center">
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
        </div>
        <div className="flex items-center gap-10 mr-20">
          <button
            className={`relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black ${
              activeButton === "Home"
                ? `${
                    isDarkMode
                      ? "border-b-2 border-white"
                      : "border-b-2 border-black"
                  }`
                : ""
            }`}
            onClick={() => handleButtonClick("Home")}
          >
            <ThemedText
              text="Home"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <button
            className={`relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black ${
              activeButton === "About"
                ? `${
                    isDarkMode
                      ? "border-b-2 border-white"
                      : "border-b-2 border-black"
                  }`
                : ""
            }`}
            onClick={() => handleButtonClick("About")}
          >
            <ThemedText
              text="About"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <button
            className={`relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black ${
              activeButton === "Portfolio"
                ? `${
                    isDarkMode
                      ? "border-b-2 border-white"
                      : "border-b-2 border-black"
                  }`
                : ""
            }`}
            onClick={() => handleButtonClick("Portfolio")}
          >
            <ThemedText
              text="Portfolio"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <button
            className={`relative hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black ${
              activeButton === "Contact"
                ? `${
                    isDarkMode
                      ? "border-b-2 border-white"
                      : "border-b-2 border-black"
                  }`
                : ""
            }`}
            onClick={() => handleButtonClick("Contact")}
          >
            <ThemedText
              text="Contact"
              className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl hover:cursor-pointer"
            />
          </button>
          <ToggleSwitch isDarkMode={isDarkMode} onToggle={handleToggle} />
        </div>
      </div>
    </>
  );
};
