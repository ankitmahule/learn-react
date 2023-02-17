import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import "./css/style.scss";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const Cart = lazy(() => import("./components/Cart"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const persistor = persistStore(store);

const AppLayout = () => {
  const [user, setUser] = useState({});
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </PersistGate>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const elements = ReactDOM.createRoot(document.getElementById("app"));
elements.render(<RouterProvider router={appRouter} />);
