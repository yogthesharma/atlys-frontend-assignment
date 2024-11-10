import { Card } from "../../widgets/Card/Card";
import { EquationCardPropTypes } from "../../App";
import { TextField } from "../../components/Textfield";
import { Typography } from "../../components/Typography";
import { RadioInput } from "../../components/RadioInput";
import ChevronDown from "../../assets/atlys/chevron-down.svg";

export interface EquationCardWidgetProps {
  title?: string;
  value?: string;
  nextFunctionId?: EquationCardPropTypes;
  handleEquationChange: (order: number, newEquation: string) => void;
  order: number;
  isValid: boolean;
}

export const EquationCard = (props: EquationCardWidgetProps) => {
  const { title, value, nextFunctionId, handleEquationChange, order, isValid } =
    props;

  const inputId = `line_input_${title?.split(" ")[1]}`;
  const outputId = `line_output_${title?.split(" ")[1]}`;

  return (
    <div className="flex items-end ">
      <div className="relative">
        <Card
          title={title}
          body={
            <div className="flex flex-col gap-4 mb-12">
              <div>
                <TextField
                  label="Equation"
                  placeholder="Equation"
                  value={value}
                  onChange={(e) => handleEquationChange(order, e.target.value)}
                  inputClassName={isValid ? "" : "error-textfield"}

                />
              </div>
              <div>
                <TextField
                  disabled
                  label="Next Function"
                  placeholder="Next Function"
                  value={nextFunctionId?.title}
                  endAdornment={
                    <div className="w-6" style={{ height: "inherit" }}>
                      <img src={ChevronDown} className="text-gray-700 w-2" />
                    </div>
                  }
                />
              </div>
            </div>
          }
          footer={
            <div className="flex items-center justify-between w-100">
              <div className="flex items-center justify-between relative w-full">
                <div className="flex items-center justify-between">
                  <RadioInput id={inputId} />
                  <Typography
                    className="text-black mb-1 ml-1 text-xs"
                    Component="label"
                  >
                    input
                  </Typography>
                </div>
                <div className="flex items-center justify-between">
                  <Typography
                    className="text-black mb-1 mr-1 text-xs"
                    Component="label"
                  >
                    output
                  </Typography>
                  <RadioInput id={outputId} />
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};
