import React, { useState, useRef, useEffect } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  NextArrow,
  PrevArrow,
  SliderButtons,
  HeroButton,
  HeroText,

} from "./HeroStyles";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => (
          <HeroSlide key={index}>
            {index === current && (
              <HeroSlider
                key={index}
                initial={{ x: "-100%", zIndex: 10 }}
                transition={{ duration: 1, ease: "easeInOut", zIndex: 10 }}
                animate={{ x: 0, opacity: 1, zIndex: 10 }}
              >
                <HeroImage
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 4 }}
                  src={slide.img}
                  alt="carros"
                />
                <HeroContent>
                  <HeroText
                    initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 4 }}
                  src={slide.img}
                  alt="carros"
                  >
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <HeroButton>Ver Más</HeroButton>
                  </HeroText>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
