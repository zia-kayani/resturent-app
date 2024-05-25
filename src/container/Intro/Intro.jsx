import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants'
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  const [playVideo , setPlayVideo] = useState(false);

  const handleVideo = () => {
    setPlayVideo((previousPlayVideo) => ! previousPlayVideo) 
    if(playVideo){
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }
  return (
    <div className='app__video'>
      <video src={meal}
        loop
        muted 
        type='video/mp4'
        ref={vidRef}
        controls={false}
      />

      <div className='app__video-overly flex__center'>
        <div className='app__video-overly_circle flex__center' onClick={handleVideo}>
          {playVideo 
              ? <BsPauseFill color="#fff" fontSize={30}/>
              : <BsFillPlayFill color="#fff" fontSize={30}/>}
        </div>
      </div>
    </div>
  )

};

export default Intro;
