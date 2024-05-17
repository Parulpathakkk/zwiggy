import { useEffect, useState } from "react";
import { LISTING } from "../utils/constants";

const useFetchData = () => {
  const [listRes, setListRes] = useState([]);
  const [filterListRes, setFilterListRes] = useState([]);
  const [caraousal, setCaraousal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(LISTING);
      const json = await data.json();

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListRes(restaurants);
      setFilterListRes(restaurants);
      setCaraousal(json?.data?.cards[0].card.card.imageGridCards.info || []);
    };

    fetchData();
  }, []);

  return { listRes, filterListRes, setFilterListRes, caraousal };
};

export default useFetchData;
