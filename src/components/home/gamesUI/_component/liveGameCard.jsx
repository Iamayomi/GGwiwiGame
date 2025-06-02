import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";
import Glowcard from "../../../shared/glowcard";

const LiveCard = ({ img, color = "bg-primary border-primary", name, path }) => {
  const navigate = useNavigate();
  return (
    <Glowcard color={color} size="100rem" position="100%">
      <div className="w-full max-w-md flex flex-col items-center justify-between p-12 rounded-lg relative overflow-hidden h-48">
        <img src={img} className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="font-medium mb-4 text-center bg-black/50 rounded-lg p-2 text-lg text-white z-10">{name}</div>
        <button onClick={() => navigate(path)} className={`${color} rounded-lg p-3 cursor-pointer z-10`}>
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </Glowcard>
  );
};

export default LiveCard;
