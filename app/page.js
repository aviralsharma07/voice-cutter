// "use client";
// import { useState, useEffect } from "react";
// import AudioEditor from "../components/audioeditor/AudioEditor";

// export default function Home() {
//   const [selectedAudio, setSelectedAudio] = useState(null);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleAudioUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedAudio(file);
//     }
//   };

//   return (
//     <div className="right">
//       {selectedAudio && <AudioEditor audioFile={selectedAudio} />}
//       <div className="right-up">
//         <div className="menu">
//           <div className="menu-item" onClick={() => scrollToSection("howitworks")}>
//             HOW IT WORKS
//           </div>
//           <div className="menu-item">JOINER</div>
//         </div>
//         <h1 className="title">Audio Cutter</h1>
//         <p className="description">Free editor to trim and cut any audio file online</p>
//       </div>
//       <div className="right-down">
//         <section id="howitworks">
//           <h1>How to Cut Audio</h1>
//           <p>
//             This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously.
//             <br /> <br /> It fast and easy to use. You can save the audio file in any format (codec parameters are configured) <br />
//             <br />
//             It works directly in the browser, no needs to install any software, is available for mobile devices.
//           </p>
//         </section>
//         <section id="privacy">
//           <h2>Privacy and Security Guaranteed</h2>
//           <p>This is serverless app. Your files does not leave your device</p>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import AudioEditor from "../components/audioeditor/AudioEditor";

export default function Home() {
  const [selectedAudio, setSelectedAudio] = useState(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedAudio(file);
    }
  };

  const closeEditor = () => {
    setSelectedAudio(null);
  };

  return (
    <div className="right">
      {selectedAudio && (
        <div className="audio-editor-modal">
          <AudioEditor audioFile={selectedAudio} onClose={closeEditor} />
        </div>
      )}
      <div className="right-up">
        <div className="menu">
          <div className="menu-item" onClick={() => scrollToSection("howitworks")}>
            HOW IT WORKS
          </div>
          <div className="menu-item">JOINER</div>
        </div>
        <h1 className="title">Audio Cutter</h1>
        <p className="description">Free editor to trim and cut any audio file online</p>
        <input type="file" accept="audio/*" onChange={handleAudioUpload} placeholder="H" />
      </div>
      <div className="right-down">
        <section id="howitworks">
          <h1>How to Cut Audio</h1>
          <p>
            This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously.
            <br /> <br /> It fast and easy to use. You can save the audio file in any format (codec parameters are configured) <br />
            <br />
            It works directly in the browser, no needs to install any software, is available for mobile devices.
          </p>
        </section>
        <section id="privacy">
          <h2>Privacy and Security Guaranteed</h2>
          <p>This is serverless app. Your files does not leave your device</p>
        </section>
      </div>
    </div>
  );
}
