import React, { useEffect } from 'react';
import song from '../../Img/video/song1.mp3'

const AudioPlayer = () => {
  useEffect(() => {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
      console.error('Audio play failed:', error);
    });
  }, []);

  return (
<audio id="background-music" src={song} type="audio/mp3" autoPlay loop  />  );
};

export default AudioPlayer;
