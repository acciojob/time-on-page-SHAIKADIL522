import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Time on page: {seconds} seconds</p>
    </div>
  );
};

export default App;