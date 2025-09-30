"use client";
import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import YouTubeService from "@/services/youtube.service";
import { VideoPrevIcon, VideoNextIcon } from "../../../../public/assets/icons";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  duration: string;
}
const mockVideos: VideoData[] = [
  {
    id: "1",
    title: "Fitness Journey",
    thumbnail: "https://img.youtube.com/vi/uMzbVw-xj1I/maxresdefault.jpg",
    videoId: "uMzbVw-xj1I",
    duration: "10:05",
  },
  {
    id: "2",
    title: "30-Minute Cardio HIIT Workout",
    thumbnail: "https://img.youtube.com/vi/BfPm-QzV_gQ/maxresdefault.jpg",
    videoId: "BfPm-QzV_gQ",
    duration: "30:00",
  },
];

const Videopage = () => {
  const [videos] = useState<VideoData[]>(mockVideos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Helper to build the YouTube embed URL with autoplay and other params
  const getEmbedUrl = (videoId: string) => {
    // 'mute=1' is required for autoplay to work on most browsers
    // 'autoplay=1' will only work if the video is muted
    // 'playsinline=1' is for iOS Safari to play inline
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&playsinline=1`;
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="video_page">
        <Container>
          <div className="video_loading">
            <div className="loading_spinner"></div>
            <p>Loading videos...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="video_page">
        <Container>
          <div className="video_error">
            <p>{error}</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="video_page">
      <Container>
        <div className="video_carousel_container">
          <h2 className="video_section_title">Fitness Gallery</h2>

          <div className="video_carousel" ref={carouselRef}>
            <div className="main_video_player">
              <div className="video_wrapper">
                <iframe
                  ref={playerRef}
                  key={videos[currentIndex]?.videoId}
                  src={getEmbedUrl(videos[currentIndex]?.videoId)}
                  title={videos[currentIndex]?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video_info">
                <h3 className="video_title">{videos[currentIndex]?.title}</h3>
                <span className="video_duration">
                  {videos[currentIndex]?.duration}
                </span>
              </div>
            </div>

            <div className="video_navigation">
              <button
                className="nav_button prev_button"
                onClick={prevVideo}
                disabled={videos.length <= 1}
              >
                <VideoPrevIcon />
              </button>

              <div className="video_thumbnails">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`thumbnail_item ${
                      index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => goToVideo(index)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="thumbnail_overlay">
                      <span className="duration">{video.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="nav_button next_button"
                onClick={nextVideo}
                disabled={videos.length <= 1}
              >
                <VideoNextIcon />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Videopage;
