import React from 'react'
import bannerPic from '../Images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="desc">
                <div>
                    <h2>Welcome </h2>
                    <span>To</span>
                    <h3>F-MART</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos rerum assumenda dolorem corrupti porro illum itaque vitae? Beatae, architecto et.</p>
                <button>EXPLORE NOW</button>
            </div>
            <img src={bannerPic} alt="logo" />
        </div>
    )
}

export default Banner