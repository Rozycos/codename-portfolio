import BottomNavBar from "@/components/common/NavBars/BottomNavBar";
import TypingAnimation from "@/components/page-specific/Main/Sections/Section1/TypingAnimation/TypingAnimation";

export default function Section1() {
    return (
        <>
            <section className="container container--section1-bg section">
                <div className="section__content hero">
                    <p>HELLO</p>
                    <TypingAnimation/>
                    <div className="hero__content">Click to open
                        <p>tekst o mnie</p>
                        <p>Click to close</p>
                    </div>
                </div>
                
                <BottomNavBar/>

            </section>
                
        </>
    );
  }