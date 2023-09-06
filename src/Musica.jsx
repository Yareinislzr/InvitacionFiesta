import ReactAudioPlayer from 'react-audio-player';
import sonido from './SoundFile.mp3';

export const Musica = () => {
  return (
    <ReactAudioPlayer src={sonido} autoPlay loop />
  );
};
