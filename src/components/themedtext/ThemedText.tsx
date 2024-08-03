import { ThemedTextProps } from "./ThemedText.types";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

export const ThemedText: React.FC<ThemedTextProps> = ({ text, className }) => {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  return (
    <p className={`${className} ${isDarkMode ? "text-white" : "text-black"}`}>
      {text}
    </p>
  );
};
