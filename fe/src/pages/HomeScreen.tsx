import { useEffect, useState } from "react";
import Card from "./Card";
import Navs from "./Navs";

const HomeScreen = () => {
  const [state, setState] = useState<Array<{}>>();

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("youtube")!));
  }, [state]);

  console.log(state);
  return (
    <div
      className="
  w-full
  h-[100vh]
  flex
  justify-center
  "
    >
      <div
        className="
      w-[95%]
      h-[100%]
      "
      >
        <Navs />
        <div className="mt-[100px] flex flex-wrap ">
          {state?.map((props: any) => (
            <Card props={props} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
