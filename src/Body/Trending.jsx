import React from 'react'

const Trending = ()=>{
    return(
        <div className="trending">
            <button className='trend'>Trending</button>
            <div className="trendCon">
                <p>Popular Books</p>
                <div className="trendbook">
                    <div className="trendOne">
                        <div className="img">
                        </div>
                        <p className='Bname'>Psychology of Money</p>
                        <p className='price'>$ 6.40 USD</p>
                    </div>
                    <div className="trendTwo">
                        <div className="img">
                        </div>
                        <p className='Bname'>Educated</p>
                        <p className='price'>$ 12.96 USD</p>
                    </div>
                    <div className="trendThree">
                        <div className="img">
                        </div>
                        <p className='Bname'>Where the crowdad sing</p>
                        <p className='price'>$ 11.12 USD</p>
                    </div>
                    <div className="trendFour">
                        <div className="img">
                        </div>
                        <p className='Bname'>To Kill a Mockingbird</p>
                        <p className='price'>$ 4.78 USD</p>
                    </div>
                </div>
            </div>
            <button className='viewall'>View All</button>
        </div>
    )
}

export default Trending