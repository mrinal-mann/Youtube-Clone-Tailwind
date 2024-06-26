import { Videocard } from "./Videocard";

const VIDEOS = [
  {
    title: "How to watch anime | BNFTV",
    image: "photo.jpg",
    thumbimage: "channeldp.jpg",
    author: "BNFTV",
    views: "15M",
    timestamp: "13 days ago",
  },
  {
    title: "How to watch anime 100days | BNFTV",
    image: "photo.jpg",
    thumbimage: "channeldp.jpg",
    author: "BNFTV",
    views: "15M",
    timestamp: "13 days ago",
  },
  {
    title: "How to watch anime 200days | BNFTV",
    image: "photo.jpg",
    thumbimage: "channeldp.jpg",
    author: "BNFTV",
    views: "15M",
    timestamp: "13 days ago",
  },  {
    title: "How to watch anime 200days | BNFTV",
    image: "photo.jpg",
    thumbimage: "channeldp.jpg",
    author: "BNFTV",
    views: "15M",
    timestamp: "13 days ago",
  },  {
    title: "How to watch anime 200days | BNFTV",
    image: "photo.jpg",
    thumbimage: "channeldp.jpg",
    author: "BNFTV",
    views: "15M",
    timestamp: "13 days ago",
  },
];
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <Videocard
            title={video.title}
            image={video.image}
            thumbimage={video.thumbimage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></Videocard>
        </div>
      ))}
    </div>
  );
};
