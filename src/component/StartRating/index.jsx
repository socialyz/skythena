import React from 'react';

const StarRating = ({ rating }) => {
  const starIcons = [];
  for (let i = 1; i <= 5; i++) {
    starIcons.push(
      <span key={i}>
        {i <= rating ? (
          <i className="fas fa-star"></i>
        ) : (
          <i className="far fa-star"></i>
        )}
      </span>
    );
  }

  return <div className="star-rating">{starIcons}</div>;
};

export default StarRating;
