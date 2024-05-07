import React, { useState } from 'react';

const DateTimePicker = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateTime = `${date} ${time}`;
    console.log('Data e Hora selecionadas:', dateTime);
    // Aqui você pode fazer o que quiser com a data e hora selecionadas, como enviar para o servidor, etc.
  };

  return (
    <div>
      <h2>Selecione a Data e a Hora:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Data:
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <br />
        <label>
          Hora:
          <input
            type="time"
            value={time}
            onChange={handleTimeChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default DateTimePicker;
