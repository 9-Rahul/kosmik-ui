import React from "react";
import "../Styles/Cover.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const Cover = () => {
  return (
    <section className="outer-cover">
      <div className="cover-title">
        <h2 className={archivo.className}>
          <span>We got you covered</span>
        </h2>
      </div>

      <div className="inner-cover">
        <div className="cover-text-and-vid-container">
          <div className="text-container">
            <h2 className={archivo.className}>
              Create a <span>moodboard</span> in seconds.
            </h2>

            <p>
              Click on the AI search bar and Kosmik will find assets on the web.
              They appear right in your workspace, so you can keep building
              without breaking your momentum. You can even filter by website to
              narrow down your search to, pinterest, cosmos, or any other you
              like.
            </p>
          </div>
          <div className="cover-vid-container">
            <video
              src="https://framerusercontent.com/assets/Hmg1rv040Y4gkUZDsQZHbx8FwE.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>

        <div className="cover-text-and-vid-container">
          <div className="text-container">
            <h2 className={archivo.className}>
              A built-in browser for <span>easy capture</span>.
            </h2>

            <p>
              Kosmik includes a built-in browser so you can explore and collect
              inspiration without ever switching tabs. When you find something
              you like, drag it straight into your canvas.
            </p>
          </div>
          <div className="cover-vid-container">
            <video
              src="https://framerusercontent.com/assets/QUF69F2ZVpAKSL1RQsm8ri7fT4A.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>

        <div className="cover-text-and-vid-container">
          <div className="text-container">
            <h2 className={archivo.className}>
              <span>Organize</span> your references.
            </h2>

            <p>
              Wether they come from the web, PDF excerpts, your clipboard or
              even your own file system Kosmik can organize all your references
              by understanding the theme of your board, finding connections
              between the assets, and understanding ambiance, style and colors.
            </p>
          </div>
          <div className="cover-vid-container">
            <video src="https://framerusercontent.com/assets/Yf9XKPMOm7WzCmM3JwpWyVWTxFk.mp4"></video>
          </div>
        </div>

        <div className="cover-text-and-vid-container">
          <div className="text-container">
            <h2 className={archivo.className}>
              Let Kosmik <span>tag your content</span> and build your
              inspiration library
            </h2>
            <p>
              Kosmik categorizes and tags everything you save automatically. It
              recognizes objects, subjects, and even colors.
            </p>
            <p>
              No need to remember filenames or folders - just describe what
              you’re looking for, and Kosmik will find it across your canvas.
            </p>
          </div>
          <div className="cover-vid-container">
            <video
              src="https://framerusercontent.com/assets/BPP7vjVPUGsf19Ci5StlpQ2YRoI.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>

        <div className="cover-text-and-vid-container">
          <div className="text-container">
            <h2 className={archivo.className}>
              Invite colleagues, clients, and <span>work together</span>
            </h2>

            <p>Collaborate with others in real-time.</p>

            <p>
              Create as many workspaces as you want to invite colleagues,
              clients, classmates or friends to collaborate on one or several
              boards.
            </p>

            <p>Publish to the web instantly.</p>
          </div>
          <div className="cover-vid-container">
            <video src="https://framerusercontent.com/assets/Hmg1rv040Y4gkUZDsQZHbx8FwE.mp4"></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
