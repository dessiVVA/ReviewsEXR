import React, {useState} from "react";

const Card = (props) => {
  const handlePrev = () =>{
      if(currentReview == 0){
          setCurrentReview(3);
      }
      else{setCurrentReview(currentReview - 1)}
  }
  const handleNext = () =>{
      if(currentReview == 3){
          setCurrentReview(0)
      }
      else{setCurrentReview(currentReview + 1)}
  }
  const handleSurprise = () =>{
      const randomReview = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      setCurrentReview(randomReview);
  }
  const[currentReview, setCurrentReview] = useState(0);
  return (
    <div className="container">
      <div className="profileIcon">
        <div className="quoteMark">&#10078;</div>
        <div className="img">
          <img src={props[currentReview].image} alt="" />
        </div>
      </div>
      <h3 className="name">{props[currentReview].name}</h3>
      <h4 className="job">{props[currentReview].job}</h4>
      <p className="quote">{props[currentReview].text}</p>
      <div className="nav">
        <p onClick={handlePrev}>&#10094;</p>
        <p onClick={handleNext}>&#10095;</p>
      </div>
      <button type="button" onClick={handleSurprise}>Surprise me</button>
    </div>
  );
};

export default Card;
