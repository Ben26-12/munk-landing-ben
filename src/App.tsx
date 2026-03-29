import "./style.css";
import Header from "./Components/Header/Header";
import MainBanner from "./Components/MainBanner/MainBanner";
import WhyMatcha from "./Components/WhyMatcha/WhyMatcha";
import HistoryMunk from "./Components/HistoryMunk/HistoryMunk";
import ProductSection from "./Components/ProductSection/ProductSection";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ReviewCarousel from "./Components/ReviewCarousel/ReviewCarousel";

function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <WhyMatcha />
      <HistoryMunk />
      <ProductSection />
      <Contact />
      <ReviewCarousel />
      <Footer />
    </>
  );
}

export default App;
