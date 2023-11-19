import React from "react";

const Catagories = () => {
  return (
    <div className="catagories">
      <div>
        <p>Explore Catagories</p>
        <div className="bookscover">
          <div className="bone">
            <div className="bone1"></div>
            <div className="bone2">
                <p>Biography</p>
                <button className="shopN">Shop Now</button>
            </div>
          </div>
          <div className="btwo">
            <div className="btwo1"></div>
            <div className="btwo2">
            <p>Novel</p>
                <button className="shopN">Shop Now</button>
            </div>
          </div>
          <div className="bthree">
            <div className="bthree1"></div>
            <div className="bthree2">
            <p>Self Help</p>
                <button className="shopN">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
