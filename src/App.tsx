import * as React from "react";

import { EquationCardWrapper } from "./plugins/EquationCard";
import { LineWrapperContainer } from "./components/Line";

import "./App.css";

export interface EquationCardPropTypes {
  title: string;
  order: number;
  equation: string;
  input?: boolean;
  output?: boolean;
}

function App() {
  // We can just change the order from here
  const [order] = React.useState([1, 2, 4, 5, 3]);

  return (
    <>
      <main className="relative">
        <EquationCardWrapper order={order} />
      </main>
      <LineWrapperContainer order={order} />
    </>
  );
}

export default App;


