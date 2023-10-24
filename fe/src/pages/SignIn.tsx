import React, { useState } from "react";
import { signInUser } from "../api/API";
import { useSignInToken } from "../global/jotai";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [state, setState] = useSignInToken();

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-purple-50 ">
      <div className="min-h-[300px] w-[500px] border rounded-md p-3 ">
        <div className="w-full flex justify-center mb-[30px]"></div>
        <div>
          <input
            className="w-full my-2 h-[50px] rounded-sm bg-transparent border outline-none pl-2 "
            placeholder="Enter your Email"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />

          <input
            className="w-full my-2 h-[50px] rounded-sm bg-transparent border outline-none pl-2 "
            placeholder="Enter your password"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div className="flex w-full justify-end">
          {/* <button className="bg-black px-6 py-2 rounded-sm mr-1 text-white ">
          Prev
        </button> */}
          <button
            className="bg-purple-700 px-6 py-2 rounded-sm ml-1 text-white "
            onClick={() => {
              signInUser({ email, password })
                .then((res: any) => {
                  setState(res);
                })
                .then(() => {
                  navigate("/");
                });
            }}
          >
            signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
