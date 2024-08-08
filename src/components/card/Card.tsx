import { useState } from "react";
import { ThemedText } from "../themedtext/ThemedText";
import { CardProps } from "./Card.types";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LoginIcon from "@mui/icons-material/Login";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const Card: React.FC<CardProps> = ({
  image_source,
  image_alt,
  project_name,
  position,
  description,
  backend_link,
  frontend_link,
  apkfile_link,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: "auto",
    bgcolor: isDarkMode ? "#121212" : "white",
    border: "2px solid #1774F",
    boxShadow: "0 0 20px rgba(23, 116, 255, 0.5)",
    p: 4,
  };
  return (
    <>
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
          <button
            onClick={handleOpen}
            className="bg-button-bg-custom text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 border-custom-color"
          >
            View more
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemedText
            text={`${project_name} link(s):`}
            className="font-bold "
          />

          {backend_link || frontend_link || apkfile_link ? (
            <>
              {backend_link && (
                <>
                  <ThemedText
                    text="Back-end API documentation:"
                    className="mt-5"
                  />

                  <a
                    className="bg-button-bg-custom text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 border-custom-color"
                    href={backend_link}
                    target="_blank"
                  >
                    Visit site <LoginIcon />
                  </a>
                </>
              )}
              {frontend_link && (
                <>
                  <ThemedText text="Web App Front-end:" className="mt-5" />

                  <a
                    className="bg-button-bg-custom text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 border-custom-color"
                    href={frontend_link}
                    target="_blank"
                  >
                    Visit site <LoginIcon />
                  </a>
                </>
              )}
              {apkfile_link && (
                <>
                  <ThemedText text="Mobile App apk file:" className="mt-5" />

                  <a
                    className="bg-button-bg-custom text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 border-custom-color"
                    href={apkfile_link}
                    target="_blank"
                  >
                    Download apk <FileDownloadOutlinedIcon />
                  </a>
                </>
              )}
            </>
          ) : (
            <ThemedText text="Under development." />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Card;
