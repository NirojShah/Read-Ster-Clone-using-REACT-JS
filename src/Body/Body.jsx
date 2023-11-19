import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Catagories from './Catagories'
import Trending from './Trending'
import Content3 from './Content3'
import Latest from './Latest'
import Footer from '../Footer/Footer'
import Feature from './Feature'

const Body = ()=>{
    return(
        <div className='main'>
            <Content1 />
            <Content2 />
            <Catagories />
            <Trending />
            <Content3 />
            <Latest />
            <Feature />
            <Footer />
        </div>
    )
}

export default Body