import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Accessories from "./components/Accessories";
import BestSeller from "./components/BestSeller";
import NewArrivals from "./components/NewArrivals";
import Collections from "./components/Collections";
import PopularBrands from "./components/PopularBrands";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import OurShop from "./components/OurShop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Accessories />
      <BestSeller />
      <NewArrivals />
      <OurShop />
      <Collections />
      <PopularBrands />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
