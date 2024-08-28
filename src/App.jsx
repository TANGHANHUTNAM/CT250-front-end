import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
