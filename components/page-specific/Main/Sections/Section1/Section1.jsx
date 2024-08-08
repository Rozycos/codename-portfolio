"use client"
import { useState } from 'react';
import BottomNavBar from "@/components/common/NavBars/BottomNavBar";
import TypingAnimation from "@/components/page-specific/Main/Sections/Section1/TypingAnimation/TypingAnimation";

export default function Section1() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMessage = () => {
        setIsOpen(!isOpen);
      };

    const textmsg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio.Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita grata recordatione renovata delectant. Est autem.";  
    
    return (
        <>
            <section className="container container--section1-bg section">
                <div className="section__content hero">
                    <p>HELLO</p>
                    <h1>
                        I Am <TypingAnimation text={["Developer", "Przemek Malec", "PixelCrafter.eu"]}/>
                        <span className="cursor">|</span>
                    </h1>
                </div>   
                    <div className={`hero hero__content ${isOpen ? '' : ''}`} onClick={toggleMessage}>
                        {/* <div className="hero__content-sqr hero__content-sqr--up"></div> */}
                        {/* <span className={`hero__content--open-msg ${isOpen ? 'hide' : 'animation2'}`}>
                            Click to open
                        </span> */}
                        {/* <p className={`${isOpen ? 'animation' : 'hide'}`}> {textmsg}</p> */}
                        {isOpen ? <p className="animation">{textmsg}</p>  : <p className="hero__content--open-msg animation3">Click to open</p>}
                        <p className={` ${isOpen ? '' : 'hide'}`}>CLICK TO CLOSE [X]</p>
                        {/* <div className="hero__content-sqr hero__content-sqr--dwn"></div> */}
                    </div>
                {/* </div> */}
                <BottomNavBar/>
            </section>
                
        </>
    );
  }