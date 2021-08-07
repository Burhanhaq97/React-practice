import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card_img">
          <img src={props.img} alt="Random-pic"  />
        </div>
        <div className="card_info">
          <h5>18 July 2021 / Web Design</h5>
          <h2>What has happened of all of the web design ideas?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            vitae fugiat illum delectus ab facilis!
          </p>
          <button>read more</button>
        </div>
      </div>
    </>
  );
};

export default Card;
