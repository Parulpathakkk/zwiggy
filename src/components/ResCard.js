import {CDN_URL} from "../utils/constants";

const ResCard = (props) => {
  const {resData} = props;
  const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} =
    resData.info;
  return (
    <div className="border-[0.1cqw] border-gray-700 shadow-lg cursor-pointer group h-full ">
      <div className="overflow-hidden aspect-[16/14]">
        <img
          className=" h-full w-full group-hover:scale-110 duration-500 transition-all"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>

      <div className="p-[1cqw] justify-between flex flex-col gap-[0.5cqw]">
        <h1 className="font-poppins text-[1.2cqw] text-gray-700 font-medium">
          {name}
        </h1>
        <p className="text-[0.9cqw] font-poppins text-gray-600">
          {cuisines.slice(0, 3).join(", ")}
          {cuisines.length > 3 ? "..." : ""}
        </p>

        <div className="flex justify-between items-center text-[0.9cqw] font-poppins text-gray-600">
          <p>{costForTwo}</p>
          <p>{avgRating} stars</p>
          <p>{resData.info.sla.deliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
