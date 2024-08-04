import BottomNavBar from "@/components/NavBars/BottomNavBar";

export default function Section1() {
    return (
        <>
            <section className='container container--section1-bg section'>
                <div className="content hero">
                    <h1>I'm Przemek Malec</h1>
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