"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="right">
      <div className="right-up">
        <div className="menu">
          <div className="menu-item" onClick={() => scrollToSection("howitworks")}>
            HOW IT WORKS
          </div>
          <div className="menu-item">JOINER</div>
        </div>
        <h1 className="title">Audio Cutter</h1>
        <p className="description">Free editor to trim and cut any audio file online</p>
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
