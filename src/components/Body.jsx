import React, { useState, useEffect } from "react";
import RestarauntCard, { withPromotedLabel } from "./RestarauntCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //   let restaraunts = restarauntList;
  const [restaraunts, setRestaraunts] = useState([]);
  const [filterRestaraunts, setFilterRestaraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestarauntCardPromoted = withPromotedLabel(RestarauntCard);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1914882&lng=79.5256144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      <div className='search m-4 p-4'>
        <input
          className=' border border-solid border-black '
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className='search-button bg-green-100 border border-black m-2 px-4 rounded-lg'
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
          className='filter-btn  border border-black  px-2 rounded-lg'
          onClick={() => {
            //filter logic here
            const filteredList = restaraunts.filter(
              (res) =>
                typeof (res.info.avgRating == Number) &&
                res.info.avgRating > 4.0
            );
            setFilterRestaraunts(filteredList);
          }}
        >
          Top Rated Restaraunts
          {console.log(filterRestaraunts[2].info?.aggregatedDiscountInfoV3)}
        </button>
      </div>
      <div className='restaraunt-cards flex flex-wrap'>
        {filterRestaraunts.map((restaraunt) => (
          <Link
            id={restaraunt.info.id}
            to={"/restaraunts/" + restaraunt.info.id}
          >
            {
              /* if restaraunt is promoted, add a tag to it */
              restaraunt?.info?.aggregatedDiscountInfoV3 ? (
                <RestarauntCardPromoted
                  id={restaraunt.info.id}
                  resData={restaraunt}
                />
              ) : (
                <RestarauntCard id={restaraunt.info.id} resData={restaraunt} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
