import { Typography } from "../../components/Typography";
import Drag from "../../assets/atlys/drag.svg"


export interface CardWidgetProps {
  title?: string
  body?: JSX.Element | string
  footer?: JSX.Element | string
}

export const Card = (props: CardWidgetProps) => {
  const { title, body, footer } = props
  return (
    <div className="bg-white border-1 border-card-border rounded-2xl shadow-card-shadow py-4 px-5 flex flex-col text-sm w-64">
      <div className="mb-5 flex items-center">
        <div className="w-4 mr-1 mt-0.5">
          <img src={Drag} className="text-title-grey rotate-90" />
        </div>
        <Typography Component="p" className="text-left text-card-title font-semibold">
          {title ?? 'Function'}
        </Typography>
      </div>
      {body}
      {footer}
    </div>
  );
}

