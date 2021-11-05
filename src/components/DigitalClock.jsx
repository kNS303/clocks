import React from "react";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, []); // [] Corta ejecución para que no sea bucle infinito
  });
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
