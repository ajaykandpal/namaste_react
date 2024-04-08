import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";

const RestarauntMenu = () => {
  // const [resData, setResData] = useState(null);

  const { resId } = useParams();

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

  const { name, cuisines } = resData?.cards[2]?.card?.card?.info;
  return (
    <div className='name'>
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {cuisines.map((dish, index) => (
          <li key={index}>{dish}</li>
        ))}
      </ul>
      {/* <h3>{cuisines.join(", ")}</h3> */}
    </div>
  );
};

export default RestarauntMenu;
