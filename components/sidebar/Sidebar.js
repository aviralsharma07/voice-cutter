"use client";
import { useState } from "react";
import "./Sidebar.css";
import Iconlink from "../iconlink/Iconlink";
import UKFlag from "../../assets/ukflag.png";
import Support from "../../assets/support.png";
import Cutter from "../../assets/cutter.png";
import Remover from "../../assets/remover.png";
import Recorder from "../../assets/recorder.jpeg";
import Karaoke from "../../assets/karaoke.png";
import Pitcher from "../../assets/pitcher.png";
import Joiner from "../../assets/joiner.png";
import Bpm from "../../assets/bpm.png";
import Splitter from "../../assets/splitter.png";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [activeLink, setActiveLink] = useState("Cutter");
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleCollapse}>
        ☰
      </div>
      <div className={`navbar ${collapsed ? "collapse" : ""}`}>
        <div className="top"></div>
        <div className="middle">
          <Iconlink text="Remover" icon={Remover} isActive={activeLink === "Remover"} setActiveLink={() => setActiveLink("Remover")} />
          <Iconlink text="Splitter" icon={Splitter} isActive={activeLink === "Splitter"} setActiveLink={() => setActiveLink("Splitter")} />
          <Iconlink text="Pitcher" icon={Pitcher} isActive={activeLink === "Pitcher"} setActiveLink={() => setActiveLink("Pitcher")} />
          <Iconlink text="Key BPM Finder" icon={Bpm} isActive={activeLink === "Key BPM Finder"} setActiveLink={() => setActiveLink("Key BPM Finder")} />
          <Iconlink text="Cutter" icon={Cutter} isActive={activeLink === "Cutter"} setActiveLink={() => setActiveLink("Cutter")} />
          <Iconlink text="Joiner" icon={Joiner} isActive={activeLink === "Joiner"} setActiveLink={() => setActiveLink("Joiner")} />
          <Iconlink text="Recorder" icon={Recorder} isActive={activeLink === "Recorder"} setActiveLink={() => setActiveLink("Recorder")} />
          <Iconlink text="Karaoke" icon={Karaoke} isActive={activeLink === "Karaoke"} setActiveLink={() => setActiveLink("Karaoke")} />
        </div>
        <div className="bottom">
          <Iconlink icon={Support} text="Support" isBtn={true} />
          <Iconlink icon={UKFlag} isBtn={true} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
