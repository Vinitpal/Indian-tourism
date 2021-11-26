const Card = ({ imgSrc, cardText }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgSrc} alt={cardText} />
        <div className="card-text">{cardText}</div>
        <div className="card-overlay"></div>
      </div>
    </div>
  );
};

export default Card;
