import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeScreen />
      </PrivateRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
