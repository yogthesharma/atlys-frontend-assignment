import React from "react";
import { EquationCard } from "./EquationCard";
import { TextField } from "../../components/Textfield";
import { RadioInput } from "../../components/RadioInput";
import { isValidLinearEquation, processEquations } from "../../utils/equation";

export interface EquationCardWrapperPropTypes {
  order: number[];
}

export const EquationCardWrapper = (props: EquationCardWrapperPropTypes) => {
  const { order } = props;
  // here we can pass as much equations as we need
  const [equationCardInfo, setEquationCardInfo] = React.useState([
    {
      title: "Function: 1",
      order: 1,
      equation: "x^2",
      isValid: true,
    },
    {
      title: "Function: 2",
      order: 2,
      equation: "2x+4",
      isValid: true,
    },
    {
      title: "Function: 3",
      order: 3,
      equation: "x^2+20",
      isValid: true,
    },
    {
      title: "Function: 4",
      order: 4,
      equation: "x-2",
      isValid: true,
    },
    {
      title: "Function: 5",
      order: 5,
      equation: "x/2",
      isValid: true,
    },
  ]);

  // initializing the value with 2 as in desings
  const [initialValue, setInitialValue] = React.useState<string>("2");
  const [finalValue, setFinalValue] = React.useState<string>();

  const setInitialValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialValue(e.target.value);
  };

  const handleEquationChange = (order: number, newEquation: string) => {
    const updatedEquations = equationCardInfo.map((eq) =>
      eq.order === order
        ? {
          ...eq,
          equation: newEquation,
          isValid: isValidLinearEquation(newEquation),
        }
        : eq
    );
    setEquationCardInfo(updatedEquations);
  };

  React.useEffect(() => {
    if (initialValue) {
      const sortedArray = order.map((order) =>
        equationCardInfo.find((obj) => obj.order === order)
      );

      const ans = processEquations(
        initialValue,
        sortedArray.map((val) => val!.equation)
      );
      setFinalValue(ans.toString());
    } else {
      setFinalValue("");
    }
  }, [equationCardInfo, initialValue, order]);

  return (
    <div className="flex items-center">
      <div className="mr-1 border-textfield lg:mb-28">
        <TextField
          placeholder="Input Number"
          value={initialValue}
          onChange={setInitialValueHandler}
          pillInfo={{ title: "Initial value of x", variant: "warning" }}
          inputClassName="border-warning-primary w-28 text-lg rounded-custom-important font-bold bold-border"
          endAdornment={
            <div className="border-l-1 border-warning-secondary w-20 flex items-center justify-center h-full">
              <RadioInput id="number_input" />
            </div>
          }
        />
      </div>
      <div className="flex flex-wrap gap-16 justify-center w-full mx-auto">
        {equationCardInfo.map((cardInfo, idx) => (
          <div key={cardInfo.order}>
            <EquationCard
              title={cardInfo.title}
              value={cardInfo.equation}
              nextFunctionId={equationCardInfo[idx + 1]}
              handleEquationChange={handleEquationChange}
              order={cardInfo.order}
              isValid={cardInfo.isValid}
            />
          </div>
        ))}
      </div>
      <div className="lg:mb-28">
        <TextField
          placeholder="Output Number"
          value={finalValue}
          inputClassName="border-success-primary w-28 text-lg rounded-custom-important font-bold bold-border"
          pillInfo={{ title: "Final Output y", variant: "success" }}
          startAdornment={
            <div className="border-r-1 border-success-secondary w-20 flex items-center justify-center h-full">
              <RadioInput id="number_output" />
            </div>
          }
        />
      </div>
    </div>
  );
};
