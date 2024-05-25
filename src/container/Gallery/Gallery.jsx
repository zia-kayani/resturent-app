import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -=300;
    }
    else {
      current.scrollRight += 300;
    }
  }
  return (
    <div className='app__gallery flex__center '>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo gallery</h1>
        <p className='p__opensans' style={{ color: '#AAA', narginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>
        <button className='custom__button' type='button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`} >
              <img src={image} alt='gallery '/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='gallery__arrrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrrow-icon' onClick={() => scroll('Right')} />

        </div>
      </div>  
   </div>
  );
}
export default Gallery;
