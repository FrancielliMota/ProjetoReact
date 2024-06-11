import React, { useState, useEffect } from 'react';
import '../style.css';

function DateTimePicker() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => updateDateTime(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function updateDateTime() {
    setDateTime(new Date());
  }

  return (
    <div>
      <h2>Data Atual: {dateTime.toLocaleDateString()}</h2>
      <h3>Hora: {dateTime.toLocaleTimeString()}</h3>
    </div>
  );
}

export default DateTimePicker;

