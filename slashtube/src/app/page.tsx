"use client";

import { useState } from "react";
import YouTube from 'react-youtube';

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [videoId, setVideoId] = useState<string | null>("dQw4w9WgXcQ");

  const handleEnter = () => {
    const urlParams = new URLSearchParams(new URL(inputValue).search);
    const id = urlParams.get('v');
    if (id) {
      setVideoId(id);
    } else {
      alert("Please enter a valid YouTube URL.");
    }
  };

  return (
    <>
      <header style={{ textAlign: 'center', padding: '20px', fontSize: '18px', color: 'white' }}>
        Slashtube
      </header>
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
        <div className="text-field-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            className="text-field"
            placeholder="Enter a YouTube URL"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ padding: '10px', flex: '1' }}
          />
          <button onClick={handleEnter} style={{ padding: '10px 20px' }}>Enter</button>
        </div>
        {videoId && (
          <YouTube videoId={videoId} opts={{ width: '640', height: '390' }} />
        )}
      </main>
      <footer style={{ textAlign: 'center', padding: '10px', color: 'white', fontSize: '12px' }}>
        © 2025 Slashtube
      </footer>
    </>
  );
}