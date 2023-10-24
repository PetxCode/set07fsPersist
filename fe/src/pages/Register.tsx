import { useState } from "react";
import pix from "../assets/start.jpg";
import { useCount, useMainUserRegistration } from "../global/jotai";
import { AiOutlineCamera } from "react-icons/ai";
import { registerUser } from "../api/API";
import { useNavigate } from "react-router-dom";

const Step = () => {
  const [state, setState] = useCount();
  const [user, setUser]: any = useMainUserRegistration();

  const [userName, setUserName] = useState<string>(user.userName);
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>(user.password);

  return (
    <div className="min-h-[300px] w-[500px] border rounded-md p-3 ">
      <div className="w-full flex justify-center mb-[30px]">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-400 border border-purple-500 mx-2 ">
            1
          </div>
          <div className="w-[100px] h-1 bg-purple-200 " />

          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-200 border border-purple-500 mx-2 ">
            2
          </div>
          <div className="w-[100px] h-1 bg-purple-200" />

          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-200 border border-purple-500 mx-2 ">
            3
          </div>
        </div>
      </div>
      <div>
        <input
          className="w-full my-2 h-[50px] rounded-sm bg-transparent border outline-none pl-2 "
          placeholder="Enter your user Name"
          value={userName}
          onChange={(e: any) => {
            setUserName(e.target.value);
          }}
        />

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
            setState(2);

            setUser({
              userName,
              email,
              password,
              bio: user.bio,
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const StepII = () => {
  const [state, setState] = useCount();
  const [user, setUser]: any = useMainUserRegistration();

  const [bio, setBio] = useState<string>(user.bio);

  return (
    <div className="min-h-[300px] w-[500px] border rounded-md p-3 ">
      <div className="w-full flex justify-center mb-[30px]">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-400 border border-purple-500 mx-2 ">
            1
          </div>
          <div className="w-[100px] h-1 bg-purple-500 " />

          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-400 border border-purple-500 mx-2 ">
            2
          </div>
          <div className="w-[100px] h-1 bg-purple-200" />

          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-200 border border-purple-500 mx-2 ">
            3
          </div>
        </div>
      </div>
      <div>
        <textarea
          className="w-full my-2 h-[200px] rounded-sm bg-transparent border outline-none pl-2 resize-none pt-3 "
          placeholder="Enter your Bio"
          value={bio}
          onChange={(e: any) => {
            setBio(e.target.value);
          }}
        />
      </div>

      <div className="flex w-full justify-end">
        <button
          className="bg-black px-6 py-2 rounded-sm mr-1 text-white "
          onClick={() => {
            setState(1);
          }}
        >
          Prev
        </button>
        <button
          className="bg-purple-700 px-6 py-2 rounded-sm ml-1 text-white "
          onClick={() => {
            setState(3);
            setUser({
              email: user?.email,
              password: user?.password,
              userName: user?.userName,
              bio: bio,
            });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const StepIII = () => {
  const navigate = useNavigate();
  const [state, setState] = useCount();
  const [user, setUser]: any = useMainUserRegistration();

  const [image, setImage] = useState<string>("");
  const [imageData, setImageData] = useState<string>("");

  const formData = new FormData();

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setImageData(file);
  };

  return (
    <div className="min-h-[300px] w-[500px] border rounded-md p-3 ">
      <div className="w-full flex justify-center mb-[30px]">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-400 border border-purple-500 mx-2 ">
            1
          </div>
          <div className="w-[100px] h-1 bg-purple-500 " />

          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-400 border border-purple-500 mx-2 ">
            2
          </div>
          <div className="w-[100px] h-1 bg-purple-500" />

          <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-purple-400 border border-purple-500 mx-2 ">
            3
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-7 ">
        <div className="w-[300px] h-[200px] rounded-md overflow-hidden relative  ">
          <img
            src={image === "" ? pix : image}
            className="w-[300px] h-[200px] rounded-md overflow-hidden border "
          />
          <label htmlFor="pix">
            <AiOutlineCamera className=" bg-[rgb(225,225,225)] absolute bottom-2 right-2 text-[50px] rounded-full p-2 hover:bg-[#aeaeae] hover:cursor-pointer transition-all duration-300 " />
          </label>
        </div>
        <input
          onChange={onHandleImage}
          id="pix"
          type="file"
          className="w-full my-2 h-[50px] rounded-sm bg-transparent border outline-none pl-2 hidden "
          placeholder="Enter your user Name"
        />
      </div>

      <div className="flex w-full justify-end">
        <button
          onClick={() => {
            setState(2);
          }}
          className="bg-black px-6 py-2 rounded-sm mr-1 text-white "
        >
          Prev
        </button>
        <button
          className="bg-purple-700 px-6 py-2 rounded-sm ml-1 text-white "
          onClick={() => {
            setState(3);
            setUser({
              bio: user.bio,
              userName: user.userName,
              email: user.email,
              password: user.password,
              avatar: image,
            });

            formData.append("avatar", imageData);
            formData.append("email", user.email);
            formData.append("password", user.password);
            formData.append("userName", user.userName);
            formData.append("bio", user.bio);

            registerUser(formData).then(() => {
              navigate("/sign-in");
            });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const Register = () => {
  const [state] = useCount();
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-purple-50 ">
      {state === 1 ? (
        <Step />
      ) : state === 2 ? (
        <StepII />
      ) : state === 3 ? (
        <StepIII />
      ) : null}
    </div>
  );
};

export default Register;
