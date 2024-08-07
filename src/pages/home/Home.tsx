import { ThemedText } from "../../components/themedtext/ThemedText";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

export default function Home() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  return (
    <section className="bg-transparent h-screen flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-around">
      <div className="flex flex-col gap-5">
        <div className="mt-20 sm:mt-20 md:mt-20 lg:mt-0 xl:mt-0 2xl:mt-0">
          <ThemedText
            text="BOHARI AMBULO"
            className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl"
          />
          <ThemedText
            text="Full Stack Developer"
            className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
          />
        </div>
        <div>
          <ThemedText text="Translating Ideas into Digital Reality: " />
          <ThemedText text="Your Vision, My Implementation." />
        </div>
        <div className="flex flex-row items-center gap-2">
          <a
            href="/assets/docs/Resume.pdf"
            className="bg-button-bg-custom text-white p-3 rounded-lg"
            download
          >
            Download CV
          </a>
          <a
            href="https://github.com/rakss17"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src={`${
                isDarkMode
                  ? "/assets/icons/github-icon-light.png"
                  : "/assets/icons/github-icon-dark.png"
              }`}
              alt="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/bohariambulo"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src={`${
                isDarkMode
                  ? "/assets/icons/linkedin-icon-light.png"
                  : "/assets/icons/linkedin-icon-dark.png"
              }`}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://facebook.com/bohari.ambulo17"
            target="_blank"
            className="cursor-pointer"
          >
            <img
              src={`${
                isDarkMode
                  ? "/assets/icons/facebook-icon-light.png"
                  : "/assets/icons/facebook-icon-dark.png"
              }`}
              alt="Facebook"
            />
          </a>
        </div>
      </div>

      <img
        alt="My image"
        src="/assets/my-home-image.png"
        className="object-contain w-home-my-image-sm-width-custom h-home-my-image-sm-height-custom sm:w-home-my-image-sm-width-custom sm:h-home-my-image-sm-height-custom md:w-home-my-image-md-width-custom md:h-home-my-image-md-height-custom lg:w-home-my-image-xl-width-custom lg:h-home-my-image-xl-height-custom xl:w-home-my-image-xl-width-custom xl:h-home-my-image-xl-height-custom 2xl:w-home-my-image-xl-width-custom 2xl:h-home-my-image-xl-height-custom bg-transparent"
      />
    </section>
  );
}
