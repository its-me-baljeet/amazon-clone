// components/CarouselCard.jsx
import { useState, useEffect } from "react";

const carouselImages = [
    "https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51AhVQ7fHwL._SX3000_.jpg",
];

const CarouselCard = () => {
    const [index, setIndex] = useState(0);

    // Auto-play every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % carouselImages.length);
    };

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
            {carouselImages.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Slide ${i}`}
                    className={`absolute w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            {/* Left Arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
            >
                ❮
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70"
            >
                ❯
            </button>
        </div>
    );
};

export default CarouselCard;
