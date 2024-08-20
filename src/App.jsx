import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import NewsPage from "./pages/News";
import IntroducePage from "./pages/Introduce";
import DeliciousDish from "./pages/DeliciousDish";
import BestDish from "./pages/BestDish";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CartPage from "./pages/Cart";
import TableBooking from "./pages/TableBooking";
import DishDetail from "./pages/DishDetail";
import PersonalPage from "./pages/Personal";
import SearchPage from "./pages/Search";
import DishPage from "./pages/Dish";
import PaymentPage from "./pages/Payment";
import NotFoundPage from "./pages/NotFound";
import PaymentInstructionPage from "./pages/PaymentInstruction";
import BuyingGuidePage from "./pages/BuyingGuide";
import MembershipPolicyPage from "./pages/MembershipPolicy";
import PaymentPolicyPage from "./pages/PaymentPolicy";
import InformationSecurityPage from "./pages/InformationSecurity";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/news",
        element: <NewsPage />,
      },
      {
        path: "/introduce",
        element: <IntroducePage />,
      },
      {
        path: "/delicious-dish",
        element: <DeliciousDish />,
      },
      {
        path: "/best-dish",
        element: <BestDish />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/cart/:id",
        element: <CartPage />,
      },
      {
        path: "/booking",
        element: <TableBooking />,
      },
      {
        path: "/dish",
        element: <DishPage />,
      },
      {
        path: "/dish-detail/:id",
        element: <DishDetail />,
      },
      {
        path: "/personal/:id",
        element: <PersonalPage />,
      },
      {
        path: "/search/:id",
        element: <SearchPage />,
      },
      {
        path: "/payment-instruction",
        element: <PaymentInstructionPage />,
      },
      {
        path: "/buying-guide",
        element: <BuyingGuidePage />,
      },
      {
        path: "/membership-policy",
        element: <MembershipPolicyPage />,
      },
      {
        path: "/payment-policy",
        element: <PaymentPolicyPage />,
      },
      {
        path: "/information-security",
        element: <InformationSecurityPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/payment/:id",
    element: <PaymentPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
