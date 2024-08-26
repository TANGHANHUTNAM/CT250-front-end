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

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    handle: { crumb: () => "Trang chủ" },
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
        handle: { crumb: () => "Liên hệ" },
      },
      {
        path: "news",
        element: <NewsPage />,
        handle: { crumb: () => "Tin tức" },
      },
      {
        path: "introduce",
        element: <IntroducePage />,
        handle: { crumb: () => "Giới thiệu" },
      },
      {
        path: "delicious-dish",
        element: <DeliciousDish />,
        handle: { crumb: () => "Món ngon mỗi ngày" },
      },
      {
        path: "best-dish",
        element: <BestDish />,
        handle: { crumb: () => "Món ăn nổi bật" },
      },
      {
        path: "login",
        element: <LoginPage />,
        handle: { crumb: () => "Đăng nhập" },
      },
      {
        path: "register",
        element: <RegisterPage />,
        handle: { crumb: () => "Đăng ký" },
      },
      {
        path: "cart/:id",
        element: <CartPage />,
        handle: { crumb: () => "Giỏ hàng" },
      },
      {
        path: "booking",
        element: <TableBooking />,
        handle: { crumb: () => "Đặt bàn" },
      },
      {
        path: "dish",
        element: <DishPage />,
        handle: { crumb: () => "Tất cả món ăn" },
      },
      {
        path: "dish-detail/:id",
        element: <DishDetailPage />,
        handle: { crumb: (data) => data?.crumb || "Chi tiết món ăn" }, // cần phải có loader của react router để lấy dữ liệu
      },
      {
        path: "personal/:id",
        element: <PersonalPage />,
        handle: { crumb: () => "Trang cá nhân" },
      },
      {
        path: "search/:id",
        element: <SearchPage />,
        handle: { crumb: () => "Tìm kiếm" },
      },
      {
        path: "payment-instruction",
        element: <PaymentInstructionPage />,
        handle: { crumb: () => "Hướng dẫn thanh toán" },
      },
      {
        path: "buying-guide",
        element: <BuyingGuidePage />,
        handle: { crumb: () => "Hướng dẫn mua hàng" },
      },
      {
        path: "membership-policy",
        element: <MembershipPolicyPage />,
        handle: { crumb: () => "Chính sách thành viên" },
      },
      {
        path: "payment-policy",
        element: <PaymentPolicyPage />,
        handle: { crumb: () => "Chính sách thanh toán" },
      },
      {
        path: "information-security",
        element: <InformationSecurityPage />,
        handle: { crumb: () => "Bảo mật thông tin" },
      },
      {
        path: "favorite-dish/:id",
        element: <FavoriteDishPage />,
        handle: { crumb: () => "Món ăn yêu thích" },
      },
      {
        path: "*",
        element: <NotFoundPage />,
        handle: { crumb: () => "404 Không tìm thấy trang" },
      },
    ],
  },
  {
    path: "payment/:id",
    element: <PaymentPage />,
    handle: { crumb: () => "Thanh toán" },
  },
];

const router = createBrowserRouter(routes);

export default router;
