import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const RatingShower = ({ value }: { value: number }) => {
  return <Rating style={{ maxWidth: 120 }} value={value} isDisabled readOnly />;
};

export default RatingShower;
