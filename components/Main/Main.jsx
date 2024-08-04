import Section1 from "./Sections/Section1";

export default function Main() {
    return (
        <>
            <main>
                <Section1/>
                <section className='container container--section2-bg'></section>
                <section className='container container--section3-bg'></section>
                <section className='container container--section4-bg'></section>
                <section className='container container--section5-bg'></section>
            </main>
        </>
    );
  }