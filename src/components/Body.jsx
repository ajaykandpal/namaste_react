import React, { useState, useEffect } from "react";
import RestarauntCard from "./RestarauntCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //   let restaraunts = restarauntList;
  const [restaraunts, setRestaraunts] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    const newResList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(newResList);
    setRestaraunts(newResList);
  };

  return restaraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='search'>
        <input
          className='search-bar'
          placeholder='Search restaraunt or dishes'
        ></input>
        <input type='button' className='search-button'></input>
        <button
          className='filter-btn'
          onClick={() => {
            //filter logic here
            const filteredList = restaraunts.filter(
              (res) => res.info.avgRating > 4.2
            );
            setRestaraunts(filteredList);
          }}
        >
          Filter Res More than 4.3 Stars
        </button>
      </div>
      <div className='restaraunt-cards'>
        {restaraunts.map((restaraunt) => (
          <RestarauntCard key={restaraunt.info.id} resData={restaraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
