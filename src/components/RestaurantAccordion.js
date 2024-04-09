import { useState } from "react";
import RestarauntAccordionBody from "./RestarauntAccordionBody";

const RestaurantAccordion = ({ data, showItems }) => {
  //   const [showItems, setShowItems] = useState(false);
  //   const handleClick = () => {
  //     setShowItems(!showItems);
  //   };
  return (
    <div>
      {console.log(data)}
      {/* header */}
      <div className='w-6/12 mx-auto my-10 bg-gray shadow-lg p-4 '>
        <div
          className='flex justify-between cursor-pointer'
          //   onClick={handleClick}
        >
          <span className='font-bold text-xl'>
            {data.title.toUpperCase()} ({data.itemCards.length})
          </span>
          <span>🔽🔼</span>
        </div>
        {showItems && <RestarauntAccordionBody items={data.itemCards} />}
      </div>
      {/* body */}
    </div>
  );
};

export default RestaurantAccordion;
