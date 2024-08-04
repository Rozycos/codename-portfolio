import BottomNavBar from "@/components/NavBars/BottomNavBar";

export default function Section1() {
    return (
        <>
            <section className='container container--section1-bg section'>
                <div className="content">
                    <div className="hellomesage">hellomesage</div>
                    <div className="aboutme">aboutme</div>
                </div>

                <BottomNavBar/>

            </section>
                
        </>
    );
  }