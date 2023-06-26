import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="logo.png" alt="Footer Section Logo" width={120} />
                    <span className="secondaryTextSpan">
                        Our vision is to make all people <br />
                        the best place to live for them
                    </span>

                </div>
                {/** right side */}
                <div className="flexColStart f-right">
                    <span className='primary-text'>Info</span>
                    <span className='secondaryTextSpan'>143 Giza, Fl3 554, EGY</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer