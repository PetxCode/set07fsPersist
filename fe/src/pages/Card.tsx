import img from "../assets/start.jpg";

interface iProps {
  props: any;
}

const Card: React.FC<iProps> = ({ props }) => {
  return (
    <div className="m-2">
      <div
        className="
        w-[400px]
        h-[300px]
      mt-[15px]
      rounded-[10px]
        "
      >
        <div
          className="
            w-[100%]
            h-[80%]
            "
        >
          <img
            src={props.snippet.thumbnails.high.url}
            className="
            object-cover
            w-[100%]
            h-[100%]
            rounded-[15px]
            hover:cursor-pointer
            hover:rounded-none
            transition-all
            duration-300
            "
          />
        </div>
        <div
          className="
            w-[100%]
            h-[20%]
            flex
            items-center
            "
        >
          <div
            className="
            w-[50px]
            h-[50px]
            rounded-[50%]
            bg-white
            ml-[10px]
            "
          >
            <img
              src={img}
              className="
              w-[100%]
              h-[100%]
              rounded-[50%]
              "
            />
          </div>
          <div
            className="
            ml-[20px]
            text-[18px]
            "
          >
            Released people come out of africa
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
