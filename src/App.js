import Marquee from "react-fast-marquee";
import Hero from "./components/Hero";
import Marqueeribbons from "./components/UI/Marquee";
import NavBar from "./components/UI/NavBar";
import Buttons from "./components/Buttons";
import Footer from "./components/UI/Footer";

function App() {
  return (
<>
    <header>
    <NavBar />
    </header>
    <main className="overflow-x-hidden">

        <Hero />
        <Marqueeribbons />
        <Buttons/>
    </main>
    <footer>
       <Footer />
    </footer>
    </>
  );
}

export default App;
