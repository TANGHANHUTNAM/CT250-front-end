import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import NewsPage from "../pages/News";
import IntroducePage from "../pages/Introduce";
import DeliciousDish from "../pages/DeliciousDish";
import BestDish from "../pages/BestDish";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import CartPage from "../pages/Cart";
import TableBooking from "../pages/TableBooking";
import DishPage from "../pages/Dish";
import DishDetailPage from "../pages/DishDetail";
import PersonalPage from "../pages/Personal";
import SearchPage from "../pages/Search";
import PaymentInstructionPage from "../pages/PaymentInstruction";
import BuyingGuidePage from "../pages/BuyingGuide";
import MembershipPolicyPage from "../pages/MembershipPolicy";
import PaymentPolicyPage from "../pages/PaymentPolicy";
import InformationSecurityPage from "../pages/InformationSecurity";
import NotFoundPage from "../pages/NotFound";
import PaymentPage from "../pages/Payment";
import FavoriteDishPage from "../pages/FavoriteDish";

const crumb = (trans, data) => {
  return { trans, data };
};

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    handle: { crumb: () => crumb("BreadcrumbsAndTitle.home") },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.contact") },
      },
      {
        path: "news",
        element: <NewsPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.news") },
      },
      {
        path: "introduce",
        element: <IntroducePage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.introduction") },
      },
      {
        path: "delicious-dish",
        element: <DeliciousDish />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.delicious_dishes") },
      },
      {
        path: "best-dish",
        element: <BestDish />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.best_dishes") },
      },
      {
        path: "login",
        element: <LoginPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.login") },
      },
      {
        path: "register",
        element: <RegisterPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.register") },
      },
      {
        path: "cart/:id",
        element: <CartPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.cart") },
      },
      {
        path: "booking",
        element: <TableBooking />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.booking") },
      },
      {
        path: "dish",
        element: <DishPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.all_dishes") },
      },
      {
        path: "dish-detail/:id",
        element: <DishDetailPage />,
        handle: {
          crumb: (data) => crumb(undefined, data?.crumb || "Chi tiết món ăn"),
        }, // cần phải có loader của react router để lấy dữ liệu
      },
      {
        path: "personal/:id",
        element: <PersonalPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.my_account") },
      },
      {
        path: "search/:id",
        element: <SearchPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.search") },
      },
      {
        path: "payment-instruction",
        element: <PaymentInstructionPage />,
        handle: {
          crumb: () => crumb("BreadcrumbsAndTitle.payment_instruction"),
        },
      },
      {
        path: "buying-guide",
        element: <BuyingGuidePage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.buying_guide") },
      },
      {
        path: "membership-policy",
        element: <MembershipPolicyPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.membership_policy") },
      },
      {
        path: "payment-policy",
        element: <PaymentPolicyPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.payment_policy") },
      },
      {
        path: "information-security",
        element: <InformationSecurityPage />,
        handle: {
          crumb: () => crumb("BreadcrumbsAndTitle.information_security"),
        },
      },
      {
        path: "favorite-dish/:id",
        element: <FavoriteDishPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.favorite_dishes") },
      },
      {
        path: "*",
        element: <NotFoundPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.not_found") },
      },
    ],
  },
  {
    path: "payment/:id",
    element: <PaymentPage />,
    handle: { crumb: () => crumb("BreadcrumbsAndTitle.payment") },
  },
];

const router = createBrowserRouter(routes);

export default router;
