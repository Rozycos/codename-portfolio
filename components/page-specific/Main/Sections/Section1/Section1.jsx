import BottomNavBar from "@/components/common/NavBars/BottomNavBar";
import TypingAnimation from "@/components/page-specific/Main/Sections/Section1/TypingAnimation/TypingAnimation";

export default function Section1() {
    return (
        <>
            <section className="container container--section1-bg section">
                <div className="section__content hero">
                    <p>HELLO</p>
                    <TypingAnimation/>
                    <div className="hero__content">
                        <div className="hero__content-sqr hero__content-sqr--up"></div>
                        <p>
                            Click to open
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim aeque doleamus animo, cum corpore dolemus, fieri tamen permagna accessio.
                            Ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum esset accusata et vituperata ab Hortensio. Qui liber cum et mortem contemnit, qua qui est imbutus quietus esse numquam potest. Praeterea bona praeterita grata recordatione renovata delectant. Est autem.
                        </p>
                        <p>Click to close</p>
                        <div className="hero__content-sqr hero__content-sqr--dwn"></div>
                    </div>
                </div>
                <BottomNavBar/>
            </section>
                
        </>
    );
  }