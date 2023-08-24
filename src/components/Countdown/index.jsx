import React, { useState } from "react";
import { useInterval } from "react-use";
import "./styles.css";

export const Countdown = () => {
  const [refresh, setRefresh] = useState(15);

  const decrementRefresh = () => {
    if (refresh === 0) {
      setRefresh(15);
    } else {
      setRefresh(refresh - 1);
    }
  };

  const handleRefresh = () => {
    setRefresh(15);
  };

  useInterval(decrementRefresh, 1000);

  return (
    <div className="countdown-container">
      <div className="countdown">{refresh}</div>
      <button className="refresh-button" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
};
