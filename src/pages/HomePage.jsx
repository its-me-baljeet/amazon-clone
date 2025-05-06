import CarouselCard from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = ({ }) => {
    return (
        <div className="bg-[#EAEDED]">
            <Navbar />
            <CarouselCard />
            <Footer />
        </div>
    );
};

export default HomePage;
