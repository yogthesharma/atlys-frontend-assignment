import React, { useEffect } from "react";
import { Line } from "./Line";

export interface LineWrapperPropTypes {
  startId: string;
  endId: string;
}

export const LineWrapper = (props: LineWrapperPropTypes) => {
  const { endId, startId } = props;

  const [lineX1, setLineX1] = React.useState(0);
  const [lineY1, setLineY1] = React.useState(0);
  const [lineX2, setLineX2] = React.useState(0);
  const [lineY2, setLineY2] = React.useState(0);

  useEffect(() => {
    const calculateLineCoordinates = () => {
      const startElement = document.getElementById(endId);
      const endElement = document.getElementById(startId);

      if (startElement && endElement) {
        const startRect = startElement.getBoundingClientRect();
        const endRect = endElement.getBoundingClientRect();

        const startX = startRect.left + startRect.width / 2;
        const startY = startRect.top + startRect.height / 2;
        const endX = endRect.left + endRect.width / 2;
        const endY = endRect.top + endRect.height / 2;

        setLineX1(startX);
        setLineY1(startY);
        setLineX2(endX);
        setLineY2(endY);
      }
    };
    calculateLineCoordinates();
    window.addEventListener("resize", calculateLineCoordinates);
  }, [endId, startId]);

  return (
    <div>
      <Line startX={lineX1} startY={lineY1} endX={lineX2} endY={lineY2} />
    </div>
  );
};

export interface LineWrapperContainerProps {
  order: number[];
}

export const LineWrapperContainer = (props: LineWrapperContainerProps) => {
  const { order } = props;

  const start = { start: "number_input", end: `line_input_${order[0]}` };
  const end = {
    start: `line_output_${order[order.length - 1]}`,
    end: `number_output`,
  };
  const orderInfo = [start];
  for (let i = 0; i < order.length - 1; i++) {
    orderInfo.push({
      start: `line_output_${order[i]}`,
      end: `line_input_${order[i + 1]}`,
    });
  }

  orderInfo.push(end);

  return orderInfo.map((val) => (
    <LineWrapper key={val.end} startId={val.start} endId={val.end} />
  ));
};
