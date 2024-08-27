import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import "./utils/i18n.js";
import { Suspense } from "react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback="...is loading">
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);
