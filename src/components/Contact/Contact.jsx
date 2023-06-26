import React from 'react'
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/** Left Side */}
                <div className="flexColStart c-left">
                    <span className = "orangeText">Our Contacts</span>
                    <span className = "primary-text">Get in Touch</span>
                    <span className = "secondaryTextSpan">We always ready to help by providing the best services <br />
                        We believe a good place to live can make your life better</span>


                        <div className="flexColStart contactModes">
                            {/** first row*/}
                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size = {25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primary-text'>Call</span>
                                            <span className = "secondaryTextSpan">+20 1503503443</span>
                                        </div>
                                    </div>
                                    <div style = {{width:"100%"}} className="flexCenter button">
                                        Call Now
                                    </div>
                                </div>

                                {/** second mode*/}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size = {25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primary-text'>Chat</span>
                                            <span className = "secondaryTextSpan">+20 1503503443</span>
                                        </div>
                                    </div>
                                    <div style = {{width:"100%"}} className="flexCenter button">
                                        Chat Now
                                    </div>
                                </div>

                            </div>

                            {/** second row*/}
                            <div className="flexStart row">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size = {25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primary-text'>Video Call</span>
                                            <span className = "secondaryTextSpan">+20 1503503443</span>
                                        </div>
                                    </div>
                                    <div style = {{width:"100%"}} className="flexCenter button">
                                        Video Call Now
                                    </div>
                                </div>

                                {/** second mode*/}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size = {25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className='primary-text'>Message</span>
                                            <span className = "secondaryTextSpan">+20 1503503443</span>
                                        </div>
                                    </div>
                                    <div style = {{width:"100%"}} className="flexCenter button">
                                        Message Now
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
                {/** Right Side */}
                <div className="flexColEnd c-right">
                    <div className="image-container">
                        <img src="contact-image.jpg" alt="Contact Sec6ion Photo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact