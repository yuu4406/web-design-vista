
import { useEffect, useRef } from "react";
import { CircleDot } from "lucide-react";

// Chấm tím (theo chủ đề)
const PURPLE = "#8B5CF6";

const MouseFollowerDot = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  // Theo dõi vị trí chuột
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Điều khiển hiệu ứng mượt mà
  useEffect(() => {
    let frameId: number;
    const render = () => {
      // Dùng LERP để mượt (giá trị gần 0 -> laggy, gần 1 -> nhanh/chậm)
      mouse.current.x += (target.current.x - mouse.current.x) * 0.18;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.left = mouse.current.x + "px";
        dotRef.current.style.top = mouse.current.y + "px";
      }
      frameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed z-[1000]"
      style={{
        left: mouse.current.x,
        top: mouse.current.y,
        transform: "translate(-50%, -50%)",
        transition: "none", // không transition để chuyển mượt
        willChange: "left, top",
      }}
    >
      <CircleDot color={PURPLE} size={24} strokeWidth={3} />
    </div>
  );
};

export default MouseFollowerDot;
