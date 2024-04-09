import { RES_URL_PREFIX } from "../utils/constants";
const RestarauntAccordionBody = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'
        >
          <div>
            <div className='py-2'>
              <span>{item.card.info.name} </span>
              <span> - Rs. {item.card.info.price / 100}</span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <img
            src={RES_URL_PREFIX + item.card.info.imageId}
            className='w-28 h-auto'
          />
        </div>
      ))}
    </div>
  );
};

export default RestarauntAccordionBody;
