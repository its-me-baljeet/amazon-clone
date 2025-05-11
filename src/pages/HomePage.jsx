import CarouselCard from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const HomePage = ({ }) => {
    return (
        <div className="bg-[#EAEDED]">
            <Navbar />
            <CarouselCard />
            <Products />
            <Footer />
        </div>
    );
};

export default HomePage;
