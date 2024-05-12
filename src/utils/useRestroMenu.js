 import { useState, useEffect } from "react";
 import { MENU_API } from "./constants";

const useRestroMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MENU_API + resId + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER" );
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestroMenu;
