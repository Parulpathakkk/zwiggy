import {useEffect, useState} from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import Caraousal from "./Caraousal";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import { LISTING } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";


function Body() {
  let [listRes, setlistRes] = useState([]);
  let [filterlistRes, setFilterlistRes] = useState([]);
  let [caraousal, setCaraousal] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      LISTING
    );

    const json = await data.json();
    setlistRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterlistRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCaraousal(json?.data?.cards[0].card.card.imageGridCards.info);
  };

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

const onlineStatus = useOnlineStatus()

if(onlineStatus===false) return <h1>offline</h1>

  return listRes.length === 0 ? (
    <Shimmer />
  ) : (
    <section className="mx-[10cqw] mt-[1cqw]">
      {/* Search and Top Rated starts */}
      <div className="flex items-center gap-[1cqw]">
        {/* Search starts */}
        <div className="flex items-center font-poppins text-[1cqw]">
          <input
            className="bg-gray-200 p-[0.4cqw] outline-none"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-gray-300 px-[1cqw] py-[0.4cqw] font-medium hover:bg-gray-400 transition-all"
            onClick={() => {
              const filterRest = listRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterlistRes(filterRest);
            }}
          >
            Search
          </button>
        </div>
        {/* Search ends */}
        {/* Top Restro starts */}
        <div>
          <button
            onClick={() => {
              let filterlist = listRes.filter((res) => res.info.avgRating > 4);
              setFilterlistRes(filterlist);
            }}
            className="bg-gray-200 font-poppins text-[1cqw]  px-[1cqw] py-[0.4cqw] hover:bg-gray-400 transition-all hover:border-gray-400"
          >
            Top rated Restaurants
          </button>
        </div>
        {/* Top Restro ends */}
      </div>
      {/* Search and Top Rated ends */}

      {/* Caraousal starts */}
      <Swiper className="relative py-[1cqw]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={6.5}
        navigation={{
        // Both prevEl & nextEl are null at render so this does not work
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onSwiper={(swiper) => {
        // Delay execution for the refs to be defined
        setTimeout(() => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current

          // Re-init navigation
          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        })
      }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
      <div className="flex items-center gap-[1cqw] absolute z-[10] right-0 top-0">
      <div className="cursor-pointer hover:bg-gray-300 transition-all px-[1cqw] py-[0.3cqw] flex justify-center items-center rounded-md" ref={navigationPrevRef}>prev</div>
      <div className="cursor-pointer hover:bg-gray-300 transition-all px-[1cqw] py-[0.3cqw] flex justify-center items-center rounded-md" ref={navigationNextRef} >next</div>
      </div>
        {caraousal.map((res2, x) => (
          <SwiperSlide key={x}>
            <Caraousal resData2={res2} />
          </SwiperSlide>
        ))}
        
      </Swiper>
      {/* Caraousal ends */}

      {/* Restro List starts */}
      <div className="grid grid-cols-4 gap-[2cqw] pt-[2cqw] pb-[3cqw] ">
        {filterlistRes.map((res) => (
          <Link
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
            className=""
          >
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
      {/* Restro List ends */}
    </section>
  );
}
export default Body;
