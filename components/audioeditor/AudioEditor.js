// import React, { useState, useRef, useEffect } from "react";
// import WaveSurfer from "wavesurfer.js";
// import "./AudioEditor.css";

// const AudioEditor = ({ audioFile }) => {
//   const waveformRef = useRef(null);
//   const wavesurfer = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (waveformRef.current) {
//       wavesurfer.current = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: "#A8DBA8",
//         progressColor: "#3B8686",
//         cursorColor: "#FFFAFF",
//         backend: "MediaElement",
//         height: 100,
//         barWidth: 2,
//       });

//       wavesurfer.current.load(URL.createObjectURL(audioFile));
//     }

//     return () => {
//       if (wavesurfer.current) {
//         wavesurfer.current.destroy();
//       }
//     };
//   }, [audioFile]);

//   const togglePlayPause = () => {
//     if (wavesurfer.current) {
//       wavesurfer.current.playPause();
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handleCut = () => {
//     // Implement cutting functionality here
//   };

//   const handleSave = () => {
//     if (wavesurfer.current) {
//       wavesurfer.current.exportPCM();
//       // Implement save/download functionality here
//     }
//   };

//   return (
//     <div className="audio-editor">
//       <div ref={waveformRef} className="waveform"></div>
//       <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
//       <button onClick={handleCut}>Cut</button>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default AudioEditor;

import React, { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioEditor.css";

const AudioEditor = ({ audioFile, onClose }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#A8DBA8",
        progressColor: "#3B8686",
        cursorColor: "#FFFAFF",
        backend: "MediaElement",
        height: 100,
        barWidth: 2,
      });

      wavesurfer.current.load(URL.createObjectURL(audioFile));
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [audioFile]);

  const togglePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  const handleCut = () => {
    // Implement cutting functionality here
  };

  const handleSave = () => {
    if (wavesurfer.current) {
      // Implement save/download functionality here
    }
  };

  return (
    <div className="audio-editor">
      <div ref={waveformRef} className="waveform"></div>
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleCut}>Cut</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AudioEditor;
