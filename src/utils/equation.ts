export const optimizeEquationForEval = (equation: string) => {
  const allowedOperations = ["+", "-", "*", "/", " ", "^"];
  let result = "";

  for (let i = 0; i < equation.length; i++) {
    const currentChar = equation[i];
    const prevChar = equation[i - 1];
    const nextChar = equation[i + 1];

    if (currentChar === "x") {
      if (
        i > 0 &&
        !allowedOperations.includes(prevChar) &&
        !["("].includes(prevChar)
      ) {
        result += "*";
      }
      result += "x";
      if (
        i < equation.length - 1 &&
        !allowedOperations.includes(nextChar) &&
        ![")"].includes(nextChar)
      ) {
        result += "*";
      }
    } else if (currentChar === "(") {
      if (i > 0 && !allowedOperations.includes(prevChar)) {
        result += "*";
      }
      result += currentChar;
    } else if (currentChar === ")") {
      result += currentChar;
      if (i < equation.length - 1 && !allowedOperations.includes(nextChar)) {
        result += "*";
      }
    } else {
      result += currentChar;
    }
  }

  result = result.replace(/\^/g, "**");
  return result;
};

export const isValidLinearEquation = (equation: string) => {
  const equationPattern =
    /^[+-]?(\d+(\.\d+)?[*/]?\s*[+-]?)*x(\^\d+)?(\s*[+-]\s*\d+(\.\d+)?)*([*/]?\d+(\.\d+)?)?$/;
  return equationPattern.test(equation);
};

export const processEquations = (initVal: string, equations: string[]) => {
  let currVal = initVal;
  equations.forEach((eq) => {
    if (isValidLinearEquation(eq)) {
      const optimizedEquation = optimizeEquationForEval(eq);
      currVal = eval(optimizedEquation.replace("x", currVal));
    }
  });
  return currVal;
};
