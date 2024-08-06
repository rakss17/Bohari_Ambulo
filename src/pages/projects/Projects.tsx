import { ThemedText } from "../../components/themedtext/ThemedText";

export default function Projects() {
  return (
    <section className="mt-about-margin-top-custom bg-transparent h-auto flex flex-col">
      <div className="flex flex-col">
        <ThemedText
          text="My recent projects"
          className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center"
        />
        <div className="mt-5 w-full gap-10 h-auto flex flex-col sm:flex-col md:flex-col lg:flex-row lx:flex-row 2xl:flex-row items-center justify-center">
          <div className="flex flex-col items-center bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 w-projects-card-width-sm-custom h-projects-card-height-sm-custom sm:w-projects-card-width-sm-custom sm:h-projects-card-height-sm-custom md:w-projects-card-width-md-custom md:h-projects-card-height-md-custom lg:w-projects-card-width-lg-custom lg:h-projects-card-height-lg-custom xl:w-projects-card-width-lg-custom xl:h-projects-card-height-lg-custom 2xl:w-projects-card-width-lg-custom 2xl:h-projects-card-height-lg-custom">
            <img
              src="../../src/assets/project-images/vehisched.png"
              alt="vehisched"
              className="object-contain w-projects-image-sm-width-custom h-projects-image-sm-height-custom bg-transparent"
            />
            <div className="flex flex-row gap-1 w-full">
              <ThemedText text="Vehi-Sched | " className="font-bold " />
              <ThemedText text=" Full Stack Developer" className="" />
            </div>
            <div className="mt-5 max-w-md">
              <ThemedText
                className="whitespace-pre-line"
                text="A web & mobile app for vehicle reservation & scheduling under the USTP Motorpool"
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 w-projects-card-width-sm-custom h-projects-card-height-sm-custom sm:w-projects-card-width-sm-custom sm:h-projects-card-height-sm-custom md:w-projects-card-width-md-custom md:h-projects-card-height-md-custom lg:w-projects-card-width-lg-custom lg:h-projects-card-height-lg-custom xl:w-projects-card-width-lg-custom xl:h-projects-card-height-lg-custom 2xl:w-projects-card-width-lg-custom 2xl:h-projects-card-height-lg-custom">
            <img
              src="../../src/assets/project-images/hanapbhouse.png"
              alt="hanapbhouse"
              className="object-contain w-projects-image-sm-width-custom h-projects-image-sm-height-custom bg-transparent"
            />
            <div className="flex flex-row gap-1 w-full">
              <ThemedText text="HanapBhouse | " className="font-bold " />
              <ThemedText text=" Full Stack Developer" className="" />
            </div>
            <div className="mt-5 max-w-md">
              <ThemedText
                className="whitespace-pre-line"
                text="A full stack mobile app for boarding house listing and browsing."
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 w-projects-card-width-sm-custom h-projects-card-height-sm-custom sm:w-projects-card-width-sm-custom sm:h-projects-card-height-sm-custom md:w-projects-card-width-md-custom md:h-projects-card-height-md-custom lg:w-projects-card-width-lg-custom 2xl:h-projects-card-height-lg-custom xl:w-projects-card-width-lg-custom xl:h-projects-card-height-lg-custom 2xl:w-projects-card-width-lg-custom 2xl:h-projects-card-height-lg-custom">
            <img
              src="../../src/assets/project-images/itrack.png"
              alt="itrack"
              className="object-contain w-projects-image-sm-width-custom h-projects-image-sm-height-custom bg-transparent"
            />
            <div className="flex flex-row gap-1 w-full">
              <ThemedText text="iTrack | " className="font-bold " />
              <ThemedText text=" Front-end Developer" className="" />
            </div>
            <div className="mt-5 max-w-md">
              <ThemedText
                className="whitespace-pre-line"
                text="A mobile app that tracks the location and number of passengers of a modern bus."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
