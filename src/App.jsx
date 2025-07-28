import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hyundai from "./components/Hyundai";
import Kamaz from "./components/Kamaz";
import Kategori from "./components/Kategori";
import Kompani from "./components/Kompani";
import Let from "./components/Let";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Novosti from "./components/Novosti";
import Vapros from "./components/Vapros";
import Zvonok from "./components/Zvonok";
import "./index.css";

const App = () => {
  return (
    <div className="">
      <Banner />
      <Navbar />
      <Zvonok />
      <Kategori />
      <Kompani />
      <Let />
      <Kamaz />
      <Hyundai />
      <Novosti />
      <Logos />
      <Vapros />
      <Footer />
    </div>
  );
};

export default App;
