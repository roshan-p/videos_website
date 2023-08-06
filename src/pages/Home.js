import React from "react";
import { Link } from "react-router-dom";

const videos = [
  {
    id: 1,
    title: "Aesthetic anime cooking ramen with sound effects",
    thumbnail:
      "https://i.ytimg.com/vi/i5T6Fnbq34c/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFkoSTAP&rs=AOn4CLAMo2znH6fFHqMvrRJEvruneJ8B5w",
    videoUrl: "https://www.youtube.com/embed/i5T6Fnbq34c",
  },
  {
    id: 2,
    title: "Thief - An Animated Short Film (2021)",
    thumbnail:
      "https://i.ytimg.com/vi/V8eWxOLXLK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFcZy9k2PjZ9nGv6gyhodZvMJ8ew",
    videoUrl: "https://www.youtube.com/embed/V8eWxOLXLK8",
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Video Website</h1>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {videos.map((video) => (
          <div style={{ padding: "40px", width: "300px", height: "200px"}}>
            <Link
              key={video.id}
              to={`/video/${video.id}?videoUrl=${video.videoUrl}&title=${video.title}`}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={video.thumbnail}
                alt={`Video ${video.id} Thumbnail`}
              />
              <p style={{textAlign:'center'}}>{video.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
