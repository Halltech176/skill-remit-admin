import star1 from "../../../assets/Star.png";
import star4 from "../../../assets/Star-3.png";
const StarRatings = ({ ratings }) => {
  const activeRatings = new Array(ratings).fill(star1);
  const inactiveRatings = new Array(5 - ratings).fill(star4);
  const starRatings = activeRatings.concat(inactiveRatings);
  const renderRatings = starRatings.map((data, index) => {
    return (
      <span>
        <img className="w-8" src={data} alt="stars" />
      </span>
    );
  });
  console.log(ratings);
  return <>{renderRatings}</>;
};
export default StarRatings;
