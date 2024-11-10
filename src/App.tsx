import * as React from "react";

import { EquationCardWrapper } from "./plugins/EquationCard";
import { LineWrapperContainer } from "./components/Line";

import "./App.css";

function App() {
  // We can just change the order from here
  const [order] = React.useState([1, 2, 4, 5, 3]);

  return (
    <>
      <main className="relative">
        <EquationCardWrapper order={order} />
      </main>
      <div className="hidden md:block">
        <LineWrapperContainer order={order} />
      </div>
    </>
  );
}

export default App;
