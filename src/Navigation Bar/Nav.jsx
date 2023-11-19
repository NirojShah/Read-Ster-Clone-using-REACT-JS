import React from 'react'


const Nav = ()=>{
    return(
        <div className='nav'>
            <div className="navigation">
                <div className="left">
                    <div className="logo">
                    </div>
                    <p className='books'>Books <select name="book" id="x">
                        <option value=""></option>
                        <option value="">Biography</option>
                        <option value="">Novel</option>
                        <option value="">Self Helo</option>
                        </select></p>
                    <p>Shop</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact us</p>
                </div>
                <div className="right">
                    <div className="search">
                        <div className="iconS">

                        </div>
                        <input type="text" placeholder='Search for Book'/>
                    </div>
                    <button></button>
                </div>
            </div>
        </div>
    )
}

export default Nav