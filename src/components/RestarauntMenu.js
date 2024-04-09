import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import { RES_URL_PREFIX } from "../utils/constants";
import RestaurantAccordion from "./RestaurantAccordion";

const RestarauntMenu = () => {
  // const [resData, setResData] = useState(null);

  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(1);

  //custom hook
  const resData = useRestarauntMenu(resId);

  //custom hook ends

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json.data);
  //   setResData(json.data);
  // };
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  if (resData === null) return <Shimmer />;
  // console.log(resData);
  const { name, cuisines, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log(resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className='text-center'>
      {/* <img
        className='res-logo rounded-xl w-[300px]'
        src={RES_URL_PREFIX + cloudinaryImageId}
        alt='restaraunt'
      /> */}
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>Cuisines: {cuisines.join(", ")}</p>
      <h2 className=' font-bold text-lg my-6'>Menu</h2>
      {/* accordion for each category */}
      {categories.map((category, index) => (
        <RestaurantAccordion
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestarauntMenu;
