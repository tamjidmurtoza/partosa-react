import { useState } from "react";
import VideoModal from "./VideoModal";

export default function VideoBlock({videoSrc, imgUrl}) {

  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc(`${videoSrc}`);
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <>
      <div
        className="cs_pr_100 wow fadeIn"
        data-wow-duration="0.8s"
        data-wow-delay="0.2s"
      >
        <sapn className="cs_video_block cs_style_1 d-block cs_video_open position-relative"
        >
          <img src={imgUrl} alt="" />
          <span className="cs_play_btn" onClick={handelClick}>
            <svg
              width={50}
              height={50}
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_137_96)">
                <path
                  d="M25 0C11.2146 0 0 11.2146 0 25C0 38.7854 11.2146 50 25 50C38.7854 50 50 38.7854 50 25C50 11.2146 38.7854 0 25 0ZM34.175 28.9021L23.3167 34.8479C22.6396 35.2292 21.8937 35.4187 21.1479 35.4187C20.3708 35.4187 19.5917 35.2125 18.8833 34.8C17.4937 33.9875 16.6667 32.5437 16.6667 30.9354V19.0625C16.6667 17.4542 17.4937 16.0104 18.8833 15.1979C20.2687 14.3875 21.9354 14.3729 23.3375 15.1625L34.1542 21.0854C35.6042 21.9 36.4562 23.3583 36.4562 24.9979C36.4562 26.6375 35.6042 28.0958 34.1729 28.9L34.175 28.9021ZM32.2917 25C32.2917 25.1812 32.1708 25.2479 32.1542 25.2604L21.2958 31.2083C21.2563 31.2292 21.1354 31.2958 20.9896 31.2062C20.8354 31.1167 20.8354 30.9833 20.8354 30.9396V19.0667C20.8354 19.0229 20.8354 18.8896 20.9896 18.8C21.0458 18.7667 21.0979 18.7563 21.1437 18.7563C21.2188 18.7563 21.2792 18.7896 21.3167 18.8104L32.1333 24.7354C32.1729 24.7583 32.2917 24.825 32.2917 25.0063V25Z"
                  fill="#69E584"
                />
              </g>
              <defs>
                <clipPath id="clip0_137_96">
                  <rect width={50} height={50} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </sapn>
      </div>
      <VideoModal 
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  )
}
