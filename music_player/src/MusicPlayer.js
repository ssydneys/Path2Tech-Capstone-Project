import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './reactstyles2.css';
import song01 from './components/song01.mp3';
import song02 from './components/song02.mp3';
import album01 from './components/album01.jpg';
import album02 from './components/album02.jpg';

const MusicPlayer = () => {
    const [setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    
    const tracks = [
        {
            title: 'Song 1 Title',
            src: song01,
            artist: 'Artist 1',
            album_cover: album01,
            album_title: 'Album 1 Title',
            duration: '2:13',
        },
        {
            title: 'Song 2 Title',
            src: song02,
            artist: 'Artist 2',
            album_cover: album02,
            album_title: 'Album 2 Title',
            duration: '2:11',
        }
    ];
  
  const currentTrack = tracks[currentTrackIndex];
    
  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    };

  const playPrevious = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  const playNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  return (
    <div className='mp_static'>
      <div className="player_details">

          <img src={currentTrack.album_cover} alt={currentTrack.album_title} className="album_covermp" />
          <div className="mp_details">{currentTrack.title}<br /><strong>{currentTrack.artist}</strong></div>
          </div>

      <div className='player_only'>
        <AudioPlayer
        autoPlay={false}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={playPrevious}
        onClickNext={playNext}
        src={tracks[currentTrackIndex].src}
        // onPlay={() => setIsPlaying(true)}
        // onPause={() => setIsPlaying(false)}
      />
      </div>

      {/* <p>
        <ol>
          {tracks.map((track, index) => (
            <li key={index} onClick={() => playTrack(index)} className='playlist_track'>
                <div className='left'>
                {index + 1} &nbsp;&nbsp;
                <img src={track.album_cover} alt={`Album cover for ${track.title}`} className='album_cover' /> 
                <div onClick={() => setIsPlaying(true)} className='playlist_song'><strong>{track.title}</strong><br /> {track.artist}</div> 
                </div>
                <div className='center'>{track.album_title}</div>
                <div className='right'>
                <div className='duration'>{track.duration}</div><br /></div>
            </li>
          ))}
        </ol>
    </p> */}
    </div>
  );
};

export default MusicPlayer;