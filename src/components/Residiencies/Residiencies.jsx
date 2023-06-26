import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "./Residiencies.css"
import { sliderSettings } from '../../utils/common'
import data from "../../utils/slider.json"


const Residiencies = () => {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Prime Choices</span>
                    <span className='primary-text'>Trending Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons />
                    {
                        data.map((card, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="flexColStart r-card">
                                        <img src={card.image} alt="home" />
                                        <span className="secondaryTextSpan r-price">
                                            <span style={{ color: "#ff8c00" }}>$</span>
                                            <span>{card.price}</span>
                                        </span>
                                        <span className='primary-text'>{card.name}</span>
                                        <span className='secondaryTextSpan'>{card.detail}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residiencies


const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick ={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick ={() => swiper.slideNext()}>&gt;</button>
        </div>
    )

}