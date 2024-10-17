import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import { DishCategoryLoader, DishDetailLoader } from "./loader";
import LayoutApp from "../layouts/LayoutApp";

const HomePage = lazy(() => import("../pages/Home"));
const ContactPage = lazy(() => import("../pages/Contact"));
const NewsPage = lazy(() => import("../pages/News"));
const IntroducePage = lazy(() => import("../pages/Introduce"));
const DeliciousDish = lazy(() => import("../pages/DeliciousDish"));
const BestDish = lazy(() => import("../pages/BestDish"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/Register"));
const CartPage = lazy(() => import("../pages/Cart"));
const TableBooking = lazy(() => import("../pages/TableBooking"));
const DishPage = lazy(() => import("../pages/Dish"));
const DishDetailPage = lazy(() => import("../pages/DishDetail"));
const PersonalPage = lazy(() => import("../pages/Personal"));
const SearchPage = lazy(() => import("../pages/Search"));
const PaymentInstructionPage = lazy(
  () => import("../pages/PaymentInstruction"),
);
const BuyingGuidePage = lazy(() => import("../pages/BuyingGuide"));
const MembershipPolicyPage = lazy(() => import("../pages/MembershipPolicy"));
const PaymentPolicyPage = lazy(() => import("../pages/PaymentPolicy"));
const InformationSecurityPage = lazy(
  () => import("../pages/InformationSecurity"),
);
const NewsDetailPage = lazy(() => import("../pages/NewsDetail"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));
const PaymentPage = lazy(() => import("../pages/Payment"));
const FavoriteDishPage = lazy(() => import("../pages/FavoriteDish"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));
const AccountLayout = lazy(() => import("../layouts/AccountLayout"));
const ChangePasswordPage = lazy(() => import("../pages/ChangePasswordPage"));
const EditProfilePage = lazy(() => import("../pages/EditProfilePage"));
const DeleteAccountPage = lazy(() => import("../pages/DeleteAccountPage"));
const ReservationOrdersPage = lazy(() => import("../pages/ReservationOrders"));
const MyPurchasePage = lazy(() => import("../pages/MyPurchase"));
const OrderDetailPage = lazy(() => import("../pages/OrderDetail"));

const crumb = (trans, data) => {
  return { trans, data };
};

const routes = [
  {
    path: "/",
    element: (
      <LayoutApp>
        <MainLayout />
      </LayoutApp>
    ),
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
        path: "news/:id",
        element: <NewsDetailPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.news") },
      },
      {
        path: "introduce",
        element: <IntroducePage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.introduction") },
      },
      {
        path: "delicious-dish",
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.delicious_dishes") },
        children: [
          {
            index: true,
            element: <DeliciousDish />,
          },
          {
            path: ":categoryId",
            element: <DeliciousDish />,
            loader: DishCategoryLoader,
            handle: {
              crumb: (data) => crumb(undefined, data?.crumb),
            },
          },
        ],
      },
      {
        path: "best-dish",
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.best_dishes") },
        children: [
          {
            index: true,
            element: <BestDish />,
          },
          {
            path: ":categoryId",
            element: <BestDish />,
            loader: DishCategoryLoader,
            handle: {
              crumb: (data) => crumb(undefined, data?.crumb),
            },
          },
        ],
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
        path: "cart",
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
        handle: {
          crumb: () => crumb("BreadcrumbsAndTitle.all_dishes"),
        },
        children: [
          {
            index: true,
            element: <DishPage />,
          },
          {
            path: ":categoryId",
            element: <DishPage />,
            loader: DishCategoryLoader,
            handle: {
              crumb: (data) => crumb(undefined, data?.crumb),
            },
          },
        ],
      },
      {
        path: "dish-detail/:id",
        element: <DishDetailPage />,
        loader: DishDetailLoader,
        handle: {
          crumb: (data) => crumb(undefined, data?.crumb || "Chi tiết món ăn"),
        }, // cần phải có loader của react router để lấy dữ liệu
      },
      {
        path: "account",
        element: (
          <PrivateRoute>
            <AccountLayout />
          </PrivateRoute>
        ),
        handle: {
          crumb: () => crumb("BreadcrumbsAndTitle.my_account.account"),
        },
        children: [
          {
            index: true,
            element: <PersonalPage />,
          },
          {
            path: "change-password",
            element: <ChangePasswordPage />,
            handle: {
              crumb: () =>
                crumb("BreadcrumbsAndTitle.my_account.change_password"),
            },
          },
          {
            path: "edit-profile",
            element: <EditProfilePage />,
            handle: {
              crumb: () => crumb("BreadcrumbsAndTitle.my_account.edit_profile"),
            },
          },
          {
            path: "delete",
            element: <DeleteAccountPage />,
            handle: {
              crumb: () =>
                crumb("BreadcrumbsAndTitle.my_account.delete_account"),
            },
          },
          {
            path: "purchase",
            handle: {
              crumb: () => crumb("BreadcrumbsAndTitle.purchase"),
            },
            children: [
              {
                index: true,
                element: <MyPurchasePage />,
              },
              {
                path: "order/:id",
                element: <OrderDetailPage />,
                handle: {
                  crumb: () => crumb("BreadcrumbsAndTitle.orderDetail"),
                },
              },
            ],
          },
          {
            path: "reservation",
            element: <ReservationOrdersPage />,
            handle: {
              crumb: () => crumb("BreadcrumbsAndTitle.reservation_orders"),
            },
          },
        ],
      },
      {
        path: "search",
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
        path: "reset-password",
        element: <ResetPasswordPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.reset_password") },
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>
        ),
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.payment") },
      },
      {
        path: "*",
        element: <NotFoundPage />,
        handle: { crumb: () => crumb("BreadcrumbsAndTitle.not_found") },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
