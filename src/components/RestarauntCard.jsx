import React, { useContext } from "react";
import { RES_URL_PREFIX } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestarauntCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className='restaraunt m-4 p-4 w-[220px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-200'>
      <img
        className='res-logo rounded-xl'
        src={RES_URL_PREFIX + cloudinaryImageId}
        alt='restaraunt'
      />
      <h3 className='font-bold py-2 text-xl'>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>{costForTwo} for two</h4>
      <h4>{loggedInUser} User</h4>
    </div>
  );
};

//higher order component:
// i/p: Restaraunt card
// o/p: Restaraunt card with promoted

export const withPromotedLabel = (RestarauntCard) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
          {props.resData.info?.aggregatedDiscountInfoV3.subHeader ||
            "Flat Deal"}
        </label>
        <RestarauntCard {...props} />
      </div>
    );
  };
};

export default RestarauntCard;
