import React, { useState } from "react";
import { render } from "react-dom";

const dateModule = () => import("./modules/dateModule");

const App = () => {
  const [date, setDate] = useState(undefined);
  const handleClick = () => {
    dateModule().then(({ getCurrentDate }) => {
      setDate(getCurrentDate());
    });
  };

  return (
    <>
      {date}
      <button onClick={handleClick}>Tıkla</button>
    </>
  );
};

render(<App />, document.getElementById("root"));
