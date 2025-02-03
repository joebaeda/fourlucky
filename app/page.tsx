"use client"

import { useEffect, useRef, useState } from "react";
import FourNumberPlay from "./components/FourNumberPlay";
import RoundStatsData from "./components/RoundStatsData";
import UserStatsData from "./components/UserStatsData";
import Disclaimer from "./components/Disclaimer";
import sdk from "@farcaster/frame-sdk";


export default function Home() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const load = async () => {
      sdk.actions.ready();
    };

    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  // Toggle audio play and pause
  const handleAudioPlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Audio play error:", err));
    }

    setIsPlaying(!isPlaying);
  };

  const handleOpen = () => {
    const audio = audioRef.current;

    if (audio) {
      audio.play().catch((err) => console.error("Audio play error:", err));
      setIsPlaying(true);
    }

    setShowOverlay(false);
  };

  const handleClose = () => {
    history.back();
  };

  if (!isSDKLoaded) {
    return <></>;
  }

  return (
    <div className="p-4">

      {/* Background Music */}
      <audio
        loop
        ref={audioRef}
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
      >
        <source
          src="/audio/clank-clank-clank.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>

      {/* Play/Pause Button */}
      <button
        onClick={handleAudioPlayPause}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-800 hover:from-pink-800 hover:to-orange-500"
      >
        {isPlaying ? (
          <svg width="35" height="35" fill="none" viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.42a3 3 0 0 0-6 0v12a3 3 0 1 0 6 0zm10 0a3 3 0 1 0-6 0v12a3 3 0 1 0 6 0z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="35" height="35" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.658 9.286c1.44.9 2.16 1.35 2.407 1.926a2 2 0 0 1 0 1.576c-.247.576-.967 1.026-2.407 1.926L9.896 18.94c-1.598.999-2.397 1.498-3.056 1.445a2 2 0 0 1-1.446-.801C5 19.053 5 18.111 5 16.226V7.774c0-1.885 0-2.827.394-3.358a2 2 0 0 1 1.446-.801c.66-.053 1.458.446 3.056 1.445z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {showOverlay ? (
        <div className="absolute inset-0 mx-auto backdrop-blur-md flex flex-col items-center justify-center z-10">
          <Disclaimer>
            <div className="text-white flex flex-row gap-4 items-center justify-center">
              <button
                onClick={handleClose}
                className="w-full p-3 bg-gradient-to-r from-orange-500 to-pink-800 hover:from-pink-800 hover:to-orange-500 rounded-lg font-mono"
              >
                Close
              </button>
              <button
                onClick={handleOpen}
                className="w-full p-3 bg-gradient-to-r from-orange-500 to-pink-800 hover:from-pink-800 hover:to-orange-500 rounded-lg font-mono"
              >
                Open
              </button>
            </div>
          </Disclaimer>
        </div>
      ) : (
        <>
          <FourNumberPlay />
          <RoundStatsData />
          <UserStatsData />
        </>
      )}
    </div>
  );
}
