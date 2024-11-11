import { FC, useState } from "react";
import './Slider.css';

const slides = [
    'Images/slide1.svg',
    'Images/slide2.svg',
    'Images/slide1.svg',
    'Images/slide2.svg',
    'Images/slide1.svg',
    'Images/slide2.svg',
    'Images/slide1.svg',
    'Images/slide2.svg',
];

const Slider: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 2 : (prevIndex - 2 + slides.length) % slides.length
        );
    };

    // Переключение на следующие два слайда
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 2) % slides.length
        );
    };

    return (
        <div className="slider">
            <div className="slider-container">
                <button className="slider-button left" onClick={goToPrevious}>
                    <img src="Images/left.svg" alt="Previous" />
                </button>
                <div
                    className="slider-inner"
                    style={{
                        transform: `translateX(-${(currentIndex * 50)}%)`
                    }}
                >
                    {slides.map((slide, index) => (
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className={`slide ${index === currentIndex || index === (currentIndex + 1) % slides.length ? 'active' : 'inactive'
                                }`}
                            key={index}
                        />
                    ))}
                </div>
                <button className="slider-button right" onClick={goToNext}>
                    <img src="Images/right.svg" alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
