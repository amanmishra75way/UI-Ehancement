"use client";
import React, { useEffect, useRef } from "react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

const Title = ({ text1, text2 }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!titleRef.current) return;

      const wavyElement = titleRef.current.querySelector(".wavy");
      const { chars } = splitText(wavyElement);
      titleRef.current.style.visibility = "visible";

      const staggerDelay = 0.12;

      animate(
        chars,
        { y: [-12, 12] },
        {
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          duration: 2,
          delay: stagger(staggerDelay, {
            startDelay: -staggerDelay * chars.length,
          }),
        }
      );
    });
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 mb-3"
      ref={titleRef}
      style={{ visibility: "hidden" }}
    >
      <p className="text-gray-500">
        <span className="wavy">
          {text1} <span className="text-gray-700 font-medium">{text2}</span>
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>

      <style>{`
        .split-char {
          will-change: transform, opacity;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Title;
