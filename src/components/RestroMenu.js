import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_API, MENU_IMG} from "../utils/constants";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestroMenu(resId)

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {itemCards} =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const {name, cuisines} = resInfo.cards[2]?.card?.card?.info;

  return (
    <div>
      <h1>{name}</h1>
      <h1>{cuisines}</h1>
      <div className="flex flex-col gap-[3cqw] mx-[15cqw]">
        {itemCards.map((item, x) => (
          <div className="flex justify-between items-center" key={x}>
            <p>{item.card.info.name}</p>
            <p>
              Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <img
              className="w-[20cqw] h-[10cqw] object-cover rounded-md"
              src={MENU_IMG + item.card.info.imageId}
            />
          </div>
        ))}
      </div>
      {console.log(itemCards)}
    </div>
  );
};

export default RestroMenu;
