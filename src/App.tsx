import { Navbar } from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./lib/store";
import Home from "./pages/home/Home";

function App() {
  const isDarkMode = useSelector(
    (state: RootState) => state.statusInfo.is_dark_mode
  );
  return (
    <div
      className={`w-screen h-screen ${
        isDarkMode ? "bg-darkmode-bgcolor" : "bg-white"
      }`}
    >
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
