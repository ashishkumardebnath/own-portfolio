import { useEffect, useState } from "react";
const AnimCursor = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.clientX - 20);
      setY(e.clientY - 20);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor duration-150"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
      <div
        className="cursor2"
        style={{
          transform: `translate(${x}px, ${y}px)`,
          marginLeft: "16px",
          marginTop: "16px",
        }}
      ></div>
    </>
  );
};

export default AnimCursor;
