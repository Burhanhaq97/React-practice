import React from "react";
import captcha_img from './bg6.png'
import './style.css'

const Captcha = () => {


  return (
    <>
      <div className="containter">
        <header>Captcha in JavaScript</header>
        <div className="captcha_area">
          <div className="captcha_imge">
            <img src={captcha_img} alt="captcha" />
            <span className="captcha"> </span>
          </div>
          <button className="captcha_relode" >
            <i className="fas fa-redo"></i>
          </button>
        </div>
        <form action="#">
          <input type="text" placeholder="Enter Captcha" required />
          <button className="captcha_btn">Check</button>
        </form>
        <div className="status_txt"></div>
      </div>
    </>
  );
};

export default Captcha;
