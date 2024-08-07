import { ThemedText } from "../themedtext/ThemedText";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({
  image_source,
  image_alt,
  project_name,
  position,
  description,
}) => {
  return (
    <div className="flex flex-col items-center bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 w-projects-card-width-sm-custom sm:w-projects-card-width-sm-custom md:w-projects-card-width-md-custom lg:w-projects-card-width-lg-custom xl:w-projects-card-width-lg-custom 2xl:w-projects-card-width-lg-custom">
      <img
        src={image_source}
        alt={image_alt}
        className="object-contain w-projects-image-sm-width-custom h-projects-image-sm-height-custom bg-transparent"
      />
      <div className="flex flex-row gap-1 w-full">
        <ThemedText text={project_name} className="font-bold " />
        <ThemedText text="|" className="font-bold " />
        <ThemedText text={position} />
      </div>
      <div className="mt-5 max-w-md">
        <ThemedText className="whitespace-pre-line" text={description} />
      </div>
      <div className="flex flex-row justify-right w-full mt-5 justify-center pr-0 sm:justify-center sm:pr-0 md:justify-center md:pr-0 lg:justify-end  lg:pr-10 xl:justify-end xl:pr-10 2xl:justify-end 2xl:pr-10 ">
        <button className="bg-button-bg-custom text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 border-custom-color">
          View more
        </button>
      </div>
    </div>
  );
};

export default Card;
