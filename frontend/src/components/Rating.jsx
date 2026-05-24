import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  return (
    <div className="rating d-flex align-items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="star-icon">
          {value >= star ? (
            <FaStar />
          ) : value >= star - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      {text && <span className="rating-text ms-1">{text}</span>}
    </div>
  );
};

export default Rating;