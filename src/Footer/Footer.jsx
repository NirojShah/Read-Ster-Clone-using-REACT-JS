import React from 'react'

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footerBox">
                <div className="footerleft">
                    <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b536f3b67156937641aaca_logo-white.svg" alt="" />
                    <h1>Start Your Empowering Reading Adventure</h1>
                    <button>Contact Us</button>
                </div>
                <div className="footerright">
                    <div className="one">
                        <li className="head">Home</li>
                        <li>About</li>
                        <li>Shop</li>
                        <li>Review</li>
                        <li>Blog</li>
                        <li>Catagory</li>
                    </div>
                    <div className="two">
                        <li>Style Guide</li>
                        <li>Licesing</li>
                        <li>Changelog</li>
                        <li>Error 404</li>
                        <li>Password</li>
                        <li>Privacy Policy</li>
                        <li>Return Policy</li>
                        <li>Coming Soon</li>
                    </div>
                </div>
            </div>
            <div className="last">
                <p>Designed by Nixar. Powered by Webflow.</p>
                <div className="icons">
                    <div className="iconbox">
                    <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b543a48bf9fbe2a98958fb_ic-twitter.svg" alt="" />
                    </div>
                    <div className="iconbox">
                    <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b543a4ca52f1ecc2fe3a2f_ic-fb.svg" alt="" />
                    </div>
                    <div className="iconbox">
                    <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b543a5a94b48cb24f50385_ic-youtube.svg" alt="" />
                    </div>
                    <div className="iconbox">
                    <img src="https://assets.website-files.com/6491518bb88c5c4729ea8883/64b543a53d0bfebf09ba61db_ic-ins.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer