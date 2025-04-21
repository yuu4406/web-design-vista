
import React, { useState } from "react";

// Hiện 1 hình tròn, hover thì hiện 3 circle overlap + chữ 
const ServiceVennDiagram = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center h-96 my-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Bình thường: 1 hình tròn "Our Services" */}
      {!hovered && (
        <div
          className="flex items-center justify-center rounded-full bg-design-blue text-white font-bold text-2xl shadow-lg transition-all duration-700 ease-in-out"
          style={{
            width: 180,
            height: 180,
            letterSpacing: "2px",
            boxShadow: "0 4px 30px 5px rgba(59,130,246,0.15)",
            cursor: "pointer",
          }}
        >
          Our Services
        </div>
      )}

      {/* Khi hover: Venn diagram chuyển động */}
      {hovered && (
        <div className="relative flex items-center justify-center w-[400px] h-[210px] transition-all duration-700">
          {/* Left Circle - Brand */}
          <div
            className="absolute left-[55px] top-[30px] z-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl text-white transition-all duration-700"
            style={{
              width: 170,
              height: 170,
              opacity: 1,
              filter: "drop-shadow(0 5px 30px rgba(0,0,0,0.12))",
            }}
          >
            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-base font-semibold">Brand</span>
          </div>
          {/* Right Circle - Product */}
          <div
            className="absolute right-[55px] top-[30px] z-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl text-white transition-all duration-700"
            style={{
              width: 170,
              height: 170,
              opacity: 1,
              filter: "drop-shadow(0 5px 30px rgba(0,0,0,0.12))",
            }}
          >
            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 text-base font-semibold">Product</span>
          </div>
          {/* Trung tâm - Mastery Area */}
          <div
            className="absolute left-1/2 top-[45px] z-20 rounded-full bg-neutral-900 flex items-center justify-center font-bold text-xl text-white transition-all duration-700"
            style={{
              width: 130,
              height: 130,
              transform: "translate(-50%, 0)",
              filter: "drop-shadow(0 6px 30px rgba(0,0,0,0.15))",
              border: "3px solid #3B82F6",
            }}
          >
            <span className="text-center text-lg font-bold">Mastery<br />Area</span>
          </div>
          {/* Tạo hiệu ứng lớn dần */}
        </div>
      )}
    </div>
  );
};
export default ServiceVennDiagram;

