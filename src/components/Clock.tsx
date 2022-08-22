import React, { useEffect } from "react";
import useClock from "../hooks/useClock";

type Props = {
 
};

const Clock = () => {

  const { hours,minutes,seconds } = useClock()

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        Time
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        { hours }
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        { minutes }
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        { seconds }
        </span>
    </div>
  );
};

export default Clock;
