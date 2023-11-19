import React from "react";

const Content2 = () => {
  return (
    <div className="content2">
      <div className="boxc2">
        <div className="c2left">
            <div className="c2image1">
                <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small-p-500.jpg" alt="" />
            </div>
            <div className="context1">
            <h2>Introducing Our Bookstore and Community</h2>
            <p>Discover our bookstore and community, where stories unfold and connections flourish.</p>
            </div>
        </div>
        <div className="c2right">
            <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big-p-800.jpg" alt="" />
            <div className="context2">
                <p>Welcome to Book Store: Empowering Minds Through Reading! We believe in the transformative power of books and their ability to shape and inspire individuals. Our mission is to create a vibrant and inclusive community that celebrates the joy of reading and encourages personal growth.</p>
                <button className="about">About Us <div className="arr"></div></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
