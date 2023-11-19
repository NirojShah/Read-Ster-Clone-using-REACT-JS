import React from "react";
import image from "../images/fone.jpg";

export const Feature = () => {
  return (
    <div className="feature">
      <div className="featurebox">
        <h1>Featured Book of the Week</h1>
        <div className="featureCon">
          <div className="fone">
            <img src={image} alt="" />
          </div>
          <div className="ftwo">
            <h3>The Almanack Of Naval Ravikant</h3>
            <p>
              Getting rich is not just about luck; happiness is not just a trait
              we are born with.These aspirations may seem out of reach, but
              building wealth and being happy are skills we can learn.
            </p>

            <p>
              So what are these skills, and how do we learn them? What are the
              principles that should guide our efforts?
            </p>

            <p>Eric Jorgenson</p>
            <p>$ 10.36 USD</p>

            <button className="shopnow">Shop Now</button>
          </div>
          <div className="fthree">
            <div className="fonemain">
              <div className="foneb">
                <img
                  src="https://assets.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-500.jpg"
                  alt=""
                />
              </div>
              <div className="foneb2">
                <p>The Psychology of Money</p>
                <p>$ 6.40 USD</p>
              </div>
            </div>

            <div className="fonemain">
              <div className="foneb">
                <img
                  src="https://assets.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01-p-500.jpg"
                  alt=""
                />
              </div>
              <div className="foneb2">
                <p>12 Rules for Life</p>
                <p>$ 9.74 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
