import {CDN_URL} from "../utils/constants";

const ResCard = (props) => {
  const {resData} = props;
  const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} =
    resData?.info;

  return (
    <div className="border-[0.1cqw] hover:bg-gray-100 transition-all shadow-lg cursor-pointer group h-full rounded-[1cqw] overflow-hidden">
      <div className="aspect-[16/14] overflow-hidden">
        <img
          className=" h-full w-full group-hover:scale-110 duration-500 transition-all"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>

      <div className="p-[1cqw] justify-between flex flex-col gap-[0.7cqw] ">
        <div>
          <h1 className="font-poppins text-[1.2cqw] text-gray-700 font-medium">
            {name}
          </h1>
          <p className="text-[0.9cqw] font-poppins text-gray-600">
            {cuisines.slice(0, 3).join(", ")}
            {cuisines.length > 3 ? "..." : ""}
          </p>
        </div>
        <div className="flex justify-between items-center text-[0.9cqw] font-poppins text-gray-600 align-bottom">
          <p>{costForTwo}</p>
          <p>{avgRating} ⭐</p>
          <p>{resData.info.sla.deliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <p>Promoted</p>
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;
