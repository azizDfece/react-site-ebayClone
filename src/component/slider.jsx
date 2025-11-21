import '../css/slider.css'
import { useState, useEffect } from 'react'



function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        "https://unsplash.it/1200/400",
        "https://unsplash.it/1200/401",
        "https://unsplash.it/1200/402",
        "https://unsplash.it/1200/404"
    ]
    const goNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((c) => (c + 1) % images.length)

        }, 3000);
        return () => clearInterval(timer)
    }, [images.length])

    return (
        <div className="slider-container">
            <img src={images[currentIndex]} alt="" />

            <p className="prev-btn" onClick={goPrev}>Prev</p>
            <p className="next-btn" onClick={goNext}>Next</p>
        </div>
    )

}

export default Slider