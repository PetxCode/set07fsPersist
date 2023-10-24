import { PropsWithChildren } from "react";
import { useMainUserData, useSignInToken } from "../global/jotai";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [useToken] = useSignInToken();
  const [state, setState] = useMainUserData();

  if (useToken) {
    const decode: any = jwtDecode(useToken);
    setState(decode.id);
  }

  return <div>{state ? <>{children}</> : <Navigate to="/sign-in" />}</div>;
};

export default PrivateRoute;
