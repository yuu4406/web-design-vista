
import { useEffect, useState } from "react";
import { CircleDot } from "lucide-react";

const PURPLE = "#8B5CF6";

const MouseFollowerDot = () => {
  const [mouse, setMouse] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1000]"
      style={{
        left: mouse.x,
        top: mouse.y,
        transform: "translate(-50%, -50%)",
        transition: "left 60ms linear, top 60ms linear"
      }}
    >
      <CircleDot color={PURPLE} size={24} strokeWidth={3} />
    </div>
  );
};

export default MouseFollowerDot;

