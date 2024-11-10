import React from "react";

interface LineProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeColor?: string;
}

export const Line: React.FC<LineProps> = ({
  startX,
  startY,
  endX,
  endY,
  strokeWidth = 6,
  strokeDasharray = "none",
  strokeColor = "#0066FF4D",
}) => {
  const controlX1 = startX + (endX - startX) / 3;
  const controlY1 = startY + Math.random() * 10 - 25;
  const controlX2 = endX - (endX - startX) / 3;
  const controlY2 = endY + + Math.random() * 10 - 25;

  const pathData = `M ${startX} ${startY} C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${endX} ${endY}`;

  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: "none" }}>
      <path
        d={pathData}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        stroke={strokeColor}
        fill="none"
        opacity={0.9}
      />
    </svg>
  );
};