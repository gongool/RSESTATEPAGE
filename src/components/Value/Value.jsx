import React from 'react';
import './Value.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import { useState } from 'react';

const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left Side */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="Value section Image" />
                    </div>
                </div>

                {/* Right Side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Provided Value</span>
                    <span className="primary-text">
                        Exceptional Value Delivered to You
                    </span>
                    <span className="secondaryTextSpan">
                        We firmly believe that residing in an exceptional living environment
                        <br /> has the power to significantly enhance and enrich your life
                    </span>

                    {/* Accordion */}
                    <Accordion
                        allowZeroExpanded
                        className="accordion"
                        preExpanded={[0]}
                        style={{ border: "none" }}
                    >
                        { data.map((item, index) => {
                            
                            const [className , setClassName] = useState(null)
                        return (

                            <AccordionItem
                                key={index}
                                uuid={index}
                                className= {`accordionItem ${className}`}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">

                                        <AccordionItemState>
                                            {({ expanded }) => expanded 
                                            ? setClassName("expanded") 
                                            : setClassName("collapsed")}
                                        </AccordionItemState>

                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primary-text">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryTextSpan">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )})}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Value;
