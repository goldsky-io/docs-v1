import Script from "next/script";
import React, { useRef } from "react";

export function HowIsIt() {
  const howIsItElemet = useRef(null);

  return (
    <>
      <style jsx global>{`
        how-is-it::part(feedback-submit-btn) {
          background-color: rgba(30, 41, 59, 0.6);
          margin-top: 0.5rem;
        }

        how-is-it::part(feedback-submit-btn):hover {
          background-color: rgb(203 213 225);
        }

        how-is-it::part(result-message) {
          color: rgb(148, 163, 184);
        }
      `}</style>
      <Script
        src="https://howisit.app/hii.js"
        crossOrigin="anonymous"
        type="module"
        referrerPolicy="no-referrer"
      />
      <how-is-it
        ref={howIsItElemet}
        projectId="clmml5gls0005mm08hpksgtw8"
      ></how-is-it>
    </>
  );
}
