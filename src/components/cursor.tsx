import { config, useSpring, a } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [cursorRef, setCursorRef] = useState({ x: 0, y: 0 });
  const cursorSpring = useSpring({
    to: {
      transform: `translate3d(${cursorRef.x - 20}px, ${
        cursorRef.y - 35
      }px, 0px)`,
    },
    config: config.gentle,
  });
  function mouseMoveHandler(e: any) {
    // const mouseX = e.clientX;
    // const mouseY = e.clientY;
    // console.log(mouseX, mouseY);
    setCursorRef({ x: e.clientX, y: e.clientY });
  }
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, []);
  return (
    <a.div
      className="pointer-events-none fixed top-4 z-50 h-12 w-12 rounded-full border border-white max-md:hidden"
      style={cursorSpring}
    ></a.div>
  );
};

export default Cursor;
