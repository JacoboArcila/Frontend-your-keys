import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { ButtonGrid } from "./GalleryStyles";

const Gallery = (response) => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [];
  const pushArray = () => {
    response.car.images?.map((i) => images.push(i.url));
  };

  pushArray();

  return (
    <div>
      <ButtonGrid type="button" onClick={() => setIsOpen(true)}>
        Ver Más
      </ButtonGrid>
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((index + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIndex((index + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
