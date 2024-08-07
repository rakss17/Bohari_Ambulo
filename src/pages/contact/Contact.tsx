import { useRef, useState } from "react";
import { ThemedText } from "../../components/themedtext/ThemedText";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { RootState } from "../../lib/store";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  const form = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current === null) return;
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID as string,
        process.env.EMAILJS_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setFormSubmitted(true);
          form.current!.reset();
          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="mt-about-margin-top-custom bg-transparent h-auto flex flex-col">
      <div className="items-center justify-around flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div className="flex flex-col gap-10">
          <ThemedText
            text="Let's connect."
            className="font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-center"
          />
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white">
              <PlaceIcon />
            </div>
            <div>
              <ThemedText text="Address" className="font-bold" />
              <ThemedText text="Cagayan de Oro, Misamis Oriental, Philippines" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white">
              <EmailIcon />
            </div>
            <div>
              <ThemedText text="Email" className="font-bold" />
              <ThemedText text="bohariambulo17@gmail.com" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white">
              <PhoneIcon />
            </div>
            <div>
              <ThemedText text="Phone" className="font-bold" />
              <ThemedText text="+639754244083" />
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white">
              <ShareIcon />
            </div>
            <div>
              <ThemedText text="Social Media" className="font-bold" />
              <a href="https://facebook.com/bohari.ambulo17" target="_blank">
                <FacebookIcon sx={{ color: isDarkMode ? "white" : "black" }} />
              </a>
              <a href="https://instagram.com/raraksss" target="_blank">
                <InstagramIcon sx={{ color: isDarkMode ? "white" : "black" }} />
              </a>
              <a href="https://linkedin.com/in/bohariambulo" target="_blank">
                <LinkedInIcon sx={{ color: isDarkMode ? "white" : "black" }} />
              </a>
              <a href="https://github.com/rakss17" target="_blank">
                <GitHubIcon sx={{ color: isDarkMode ? "white" : "black" }} />
              </a>
            </div>
          </div>
        </div>
        <form
          ref={form}
          className="flex flex-col item-center mt-10 gap-5"
          onSubmit={sendEmail}
        >
          <div>
            <ThemedText text="Name" className="font-bold" />
            <input
              className={`w-contact-input-width-sm-custom sm:w-contact-input-width-sm-custom md:w-contact-input-width-sm-custom lg:w-contact-input-width-lg-custom xl:w-contact-input-width-lg-custom 2xl:w-contact-input-width-lg-custom bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              placeholder="Your name"
              required
              type="text"
              name="user_name"
            />
          </div>
          <div>
            <ThemedText text="Email" className="font-bold" />
            <input
              className={`w-contact-input-width-sm-custom sm:w-contact-input-width-sm-custom md:w-contact-input-width-sm-custom lg:w-contact-input-width-lg-custom xl:w-contact-input-width-lg-custom 2xl:w-contact-input-width-lg-custom bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              placeholder="Your email"
              required
              type="email"
              name="user_email"
            />
          </div>
          <div>
            <ThemedText text="Message" className="font-bold" />
            <textarea
              className={`h-contact-input-height-custom w-contact-input-width-sm-custom sm:w-contact-input-width-sm-custom md:w-contact-input-width-sm-custom lg:w-contact-input-width-lg-custom xl:w-contact-input-width-lg-custom 2xl:w-contact-input-width-lg-custom bg-transparent border-2 border-custom-color shadow-custom-shadow p-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              placeholder="Your message..."
              required
              name="message"
            />
          </div>

          <button
            type="submit"
            value="Send"
            className="bg-button-bg-custom text-white p-3 rounded-lg hover:bg-white hover:text-black border-2 border-custom-color"
          >
            Send
          </button>
          {formSubmitted && (
            <ThemedText
              text="Form submitted successfully!"
              className="font-bold text-center text-green-500"
            />
          )}
        </form>
      </div>
      <div className="w-full h-auto p-2 flex flex-row items-center justify-center mt-20 bg-button-bg-custom">
        <p className="text-white">
          © 2024 Bohari Ambulo | All rights reserved.
        </p>
      </div>
    </section>
  );
}
