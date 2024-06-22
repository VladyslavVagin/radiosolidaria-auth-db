"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import css from "./SolidariaTV.module.css";

const SolidariaTV = ({ canalVideo }) => {
  const [videosURL, setVideoURL] = useState(null);
  const [videosYoutube, setVideosYoutube] = useState([]);

  useEffect(() => {
    if (canalVideo === "Solidaria TV") {
      setVideoURL("tv");
    } else if (canalVideo === "Solidaria TV Kids") {
      setVideoURL("kids");
    } else if (canalVideo === "Miguel Díez") {
      setVideoURL("miguel");
    } else if (canalVideo === "Ramóon Ubillos") {
      setVideoURL("ramon");
    } else {
      setVideoURL(null);
    }
  }, [canalVideo]);

  return (
    <div className={css.videosContainer}>
      {videosURL && videosYoutube?.map((video) => (
        <div key={video._id}>
          <div>
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={css.videoContainer}
            ></iframe>
          </div>
        </div>
      ))}
      {canalVideo !== null && (
        <Link
          href={
            canalVideo === "Solidaria TV Kids"
              ? "https://www.youtube.com/@SolidariaKids/videos"
              : "https://www.youtube.com/channel/UC7746OINwIay25Xz1ByfYZw"
          }
          target="_blank"
          aria-label="Ir a Youtube canal de Radio Solidaria"
          className={css.link}
        >
          Ver <span>&nbsp;TODOS&nbsp;</span> los videos
        </Link>
      )}
    </div>
  );
};

export default SolidariaTV;