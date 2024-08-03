import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Navbar } from "./components/navbar/Navbar";
import { store } from "./lib/store";
import { persistor } from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
      </PersistGate>
    </Provider>
  );
}

export default App;
