import { RES_URL_PREFIX } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestarauntAccordionBody = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItme = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'
        >
          <div className='w-9/12'>
            <div className='py-2'>
              <span>{item.card.info.name} </span>
              <span> - Rs. {item.card.info.price / 100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 '>
            <button
              className=' m-1 p-2 absolute shadow-lg bg-black text-white rounded-lg'
              onClick={() => handleAddItme(item)}
            >
              +Add
            </button>
            <img
              src={RES_URL_PREFIX + item.card.info.imageId}
              className='w-full'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestarauntAccordionBody;
