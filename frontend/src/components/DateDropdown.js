
import React from 'react';

const DateDropdown = ({ dates, selectedDate, onSelectDate }) => (
  <select value={selectedDate} onChange={(e) => onSelectDate(e.target.value)}>
    {dates.map((date) => (
      <option key={date} value={date}>{date}</option>
    ))}
  </select>
);

export default DateDropdown;
