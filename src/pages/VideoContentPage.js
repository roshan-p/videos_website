import React from 'react';
import {  useLocation } from 'react-router-dom';

const VideoContentPage = () => {
  const location = useLocation();
  const videoUrl = new URLSearchParams(location.search).get('videoUrl');
  const title = new URLSearchParams(location.search).get('title');

  // You can fetch video data based on the videoId and display it here

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Video Content Page</h1>
      <p>{title}</p>
      <div style={{ width: '560px', height: '315px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe width="560" height="315" src={videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default VideoContentPage;
