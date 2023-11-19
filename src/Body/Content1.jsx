import React from "react";

const Content1 = () => {
  return (
    <div className="content1">
      <div className="top">
        <div className="box">
          <div className="one">
            <p>Find your next great read at our online book store</p>
            <button>
              Explore Books{" "}
              <img
                src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                alt=""
              />
            </button>
          </div>
          <div className="box2">
            <div className="two">
              <img
                src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13-p-500.jpg"
                alt=""
              />
            </div>
            <div className="three">
              <img
                src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03-p-500.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="boxb">
          <div className="leftb">
            <div className="star">

            </div>
            <button className="bio">Biography</button>
            <button className="novel">Novel</button>
            <div className="star">

            </div>
            <button className="self">Self Help</button>
          </div>
          <div className="rightb">
            <button className="review">Reviews</button>
            <div className="profile">
              <div className="pro1"></div>
              <div className="pro2"></div>
              <div className="pro3"></div>
            </div>
            <p>Find captivating stories, knowledge, and adventures. From classics to bestsellers, there's something for everyone.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
