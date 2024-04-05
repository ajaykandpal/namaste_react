import React from "react";
import ReactDOM from "react-dom/client";
import { RES_URL_PREFIX } from "../utils/constants";

const RestarauntCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className='restaraunt' style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className='res-logo'
        src={RES_URL_PREFIX + cloudinaryImageId}
        alt='restaraunt'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
      <h4>Rs. {costForTwo} for two</h4>
    </div>
  );
};

export default RestarauntCard;
