import { Navbar } from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";

function App() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  return (
    <div
      className={`w-full h-full ${
        isDarkMode ? "bg-darkmode-bgcolor" : "bg-white"
      }`}
    >
      <Navbar />
    </div>
  );
}

export default App;
