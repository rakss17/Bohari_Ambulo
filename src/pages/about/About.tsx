import { ThemedText } from "../../components/themedtext/ThemedText";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

export default function About() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  return (
    <section className="mt-about-margin-top-custom bg-transparent h-auto flex flex-col">
      <div className="bg-transparent h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-center gap-10">
        <img
          alt="My image"
          src="../../src/assets/my-image.png"
          className="object-contain w-home-my-image-sm-width-custom h-home-my-image-sm-height-custom sm:w-home-my-image-sm-width-custom sm:h-home-my-image-sm-height-custom md:w-home-my-image-md-width-custom md:h-home-my-image-md-height-custom lg:w-home-my-image-xl-width-custom lg:h-home-my-image-xl-height-custom xl:w-home-my-image-xl-width-custom xl:h-home-my-image-xl-height-custom 2xl:w-home-my-image-xl-width-custom 2xl:h-home-my-image-xl-height-custom bg-transparent"
        />
        <div className="max-w-xl mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0 2xl:mt-0 gap-5 flex flex-col px-10">
          <ThemedText
            text="Getting to know me"
            className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
          />

          <ThemedText
            text="I am a full stack developer with a bachelor's degree, which I completed in July 2024 at University of Science and Technology of Southern Philippines. Our capstone group was awarded Best Capstone and Project Research, and I led the team as a full stack web and mobile developer in our software project."
            className="text-justify whitespace-pre-line"
          />

          <ThemedText
            text="Throughout my academic career, I have gained hands-on experience in both front-end and back-end development, working with technologies such as React, React Native, and Django. I am passionate about creating efficient, user-friendly applications and enjoy solving complex problems."
            className="text-justify whitespace-pre-line"
          />
        </div>
      </div>
      <div className="px-10 mt-about-margin-top-custom h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-around gap-5">
        <div className="flex flex-col">
          <ThemedText
            text="What I offer"
            className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-center"
          />
          <div className="mt-5 w-full gap-10 h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-center">
            <div
              className={`max-w-sm ${
                isDarkMode
                  ? "bg-transparent border-2 border-custom-color shadow-custom-shadow p-4"
                  : "bg-transparent border-2 border-custom-color shadow-custom-shadow p-4"
              }`}
            >
              <ThemedText className="font-bold" text="Web App Development" />
              <ThemedText
                className="whitespace-pre-line text-justify"
                text="This service focuses on building websites and online apps that work well on any device. It includes designing how the app looks, making sure it works correctly, and ensuring it runs smoothly on different platforms."
              />
            </div>
            <div
              className={`max-w-sm ${
                isDarkMode
                  ? "bg-transparent border-2 border-custom-color shadow-custom-shadow p-4"
                  : "bg-transparent border-2 border-custom-color shadow-custom-shadow p-4"
              }`}
            >
              <ThemedText className="font-bold" text="Mobile App Development" />
              <ThemedText
                className="whitespace-pre-line text-justify"
                text="This service focuses on creating apps for smartphones. It includes designing the app's look, making sure it works well, and ensuring it runs smoothly on different devices like iPhones and Android phones using React Native Expo."
              />
            </div>
            <div
              className={`max-w-sm ${
                isDarkMode
                  ? "bg-transparent border-2 border-custom-color shadow-custom-shadow p-4"
                  : "bg-transparent border-2 border-custom-color shadow-custom-shadow p-4"
              }`}
            >
              <ThemedText className="font-bold" text="API Integration" />
              <ThemedText
                className="whitespace-pre-line text-justify"
                text="This service involves connecting different software systems to work together. It includes setting up and linking applications so they can share data and functions, making everything work smoothly as one system."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="gap-5 px-12 mt-about-margin-top-custom h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-around">
        <div className="max-w-lg">
          <ThemedText
            className="font-bold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"
            text="Tech Stack"
          />
          <ThemedText
            className="whitespace-pre-line text-justify"
            text="These are the technologies that help me get the job done. I learned some of them during my academic journey, while others I acquired through self-study and developing personal projects. These technologies are designed to deliver high-quality, scalable, and efficient solutions. Utilizing them enables me to tackle complex problems and create robust applications."
          />
        </div>
        <div
          className={`${
            isDarkMode
              ? "bg-techstack-bg-dark-custom"
              : "bg-techstack-bg-light-custom"
          } flex flex-row flex-wrap max-w-lg rounded-lg justify-center items-center`}
        >
          <img src="../../src/assets/icons/html-icon.png" alt="html" />
          <img src="../../src/assets/icons/css-icon.png" alt="css" />
          <img
            src="../../src/assets/icons/javascript-icon.png"
            alt="javascript"
          />
          <img
            src="../../src/assets/icons/typescript-icon.png"
            alt="typescript"
          />
          <img src="../../src/assets/icons/react-icon.png" alt="react" />
          <img src="../../src/assets/icons/python-icon.png" alt="python" />
          <img src="../../src/assets/icons/django-icon.png" alt="django" />
          <img src="../../src/assets/icons/postman-icon.png" alt="postman" />
          <img src="../../src/assets/icons/redis-icon.png" alt="redis" />
          <img src="../../src/assets/icons/docker-icon.png" alt="docker" />
          <img src="../../src/assets/icons/git-icon.png" alt="git" />
          <img src="../../src/assets/icons/github-icon.png" alt="github" />
          <img src="../../src/assets/icons/vite-icon.png" alt="vite" />
        </div>
      </div>
    </section>
  );
}
