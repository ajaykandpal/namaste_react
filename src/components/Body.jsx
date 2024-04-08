import React, { useState, useEffect } from "react";
import RestarauntCard from "./RestarauntCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //   let restaraunts = restarauntList;
  const [restaraunts, setRestaraunts] = useState([]);
  const [filterRestaraunts, setFilterRestaraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    setFilterRestaraunts(newResList);
  };

  // online Status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );

  return restaraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='search'>
        <input
          className='search-bar'
          placeholder='Search restaraunt or dishes'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className='search-button'
          onClick={() => {
            //filter restaraunts based on input and update UI
            const results = restaraunts.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            if (results.length !== 0) setFilterRestaraunts(results);
          }}
        >
          Search
        </button>
        <button
          className='filter-btn'
          onClick={() => {
            //filter logic here
            const filteredList = restaraunts.filter(
              (res) =>
                typeof (res.info.avgRating == Number) &&
                res.info.avgRating > 4.0
            );
            setRestaraunts(filteredList);
          }}
        >
          Top Rated Restaraunts
        </button>
      </div>
      <div className='restaraunt-cards'>
        {filterRestaraunts.map((restaraunt) => (
          <Link
            id={restaraunt.info.id}
            to={"/restaraunts/" + restaraunt.info.id}
          >
            <RestarauntCard id={restaraunt.info.id} resData={restaraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
