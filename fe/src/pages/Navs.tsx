import { useState } from "react";
import { getYoutubeVideos, readMyEndPoint } from "../api/API";

const Navs = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  const [toggle3, setToggle3] = useState<boolean>(false);
  const [toggle4, setToggle4] = useState<boolean>(false);

  return (
    <div className="fixed w-full h-[70px] justify-between items-center">
      <div className="px-5 flex items-center py-3 rounded-md text-whitefont-bold w-full ">
        <div
          className={`
        px-5 py-3 text-white bg-[${
          toggle ? "black" : "red"
        }] mx-2 hover:cursor-pointer
        // text-[#c7c6c6]
        `}
          onClick={() => {
            setToggle(true);
            setToggle1(false);
            setToggle2(false);
            setToggle3(false);
            setToggle4(false);

            getYoutubeVideos("News").then((res) => {
              console.log(res);
              localStorage.setItem("youtube", JSON.stringify(res[0].News));
            });
          }}
        >
          News
        </div>

        <div
          className={`
        px-5 py-3 text-white  bg-[${toggle1 ? "black" : "red"}] mx-2

        hover:cursor-pointer
        `}
          onClick={() => {
            setToggle(false);
            setToggle1(true);
            setToggle2(false);
            setToggle3(false);
            setToggle4(false);

            getYoutubeVideos("Sports").then((res) => {
              localStorage.setItem("youtube", JSON.stringify(res[1].Sports));
            });
          }}
        >
          Sports
        </div>

        <div
          className={`
        px-5 py-3 text-white  bg-[${toggle2 ? "black" : "red"}] mx-2

        hover:cursor-pointer
        `}
          onClick={() => {
            setToggle(false);
            setToggle1(false);
            setToggle2(true);
            setToggle3(false);
            setToggle4(false);

            getYoutubeVideos("War").then((res) => {
              console.log(res);
              localStorage.setItem("youtube", JSON.stringify(res[2].War));
            });
          }}
        >
          War
        </div>

        <div
          className={`
        px-5 py-3 text-white  bg-[${toggle3 ? "black" : "red"}] mx-2

        hover:cursor-pointer
        `}
          onClick={() => {
            setToggle(false);
            setToggle1(false);
            setToggle2(false);
            setToggle3(true);
            setToggle4(false);

            localStorage.removeItem("youtube");
          }}
        >
          Technology
        </div>

        <div
          className={`
        px-5 py-3 text-white  bg-[${toggle4 ? "black" : "red"}] mx-2

        hover:cursor-pointer
        `}
          onClick={() => {
            setToggle(false);
            setToggle1(false);
            setToggle2(false);
            setToggle3(false);
            setToggle4(true);
          }}
        >
          Movies
        </div>
      </div>
    </div>
  );
};

export default Navs;
