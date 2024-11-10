
// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import DateDropdown from './components/DateDropdown';
import StrategyCard from './components/StrategyCard';

const App = () => {
  const views = ['Bullish', 'Bearish', 'RangeBound', 'Volatile'];
  const dates = ['25-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];
  const [selectedView, setSelectedView] = useState(views[0]);
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [strategies, setStrategies] = useState([]);

  // Strategy data based on PDF
  const strategyArray = [
    {
      view: 'Bullish',
      value: {
        '25-Apr-2024': ['Bull Call Spread', 'Bull Put Spread', 'Long Call', 'Strategy1'],
        '02-May-2024': ['Bull Call Spread', 'Long Call', 'Strategy2'],
        '09-May-2024': ['Strategy Put', 'Strategy Call'],
      },
    },
    {
      view: 'Bearish',
      value: {
        '25-Apr-2024': ['Bear Call Spread', 'Bear Call Spread', 'Long Put'],
        '31-May-2024': ['Long Put', 'Bear Put Spread'],
        '21-Jun-2024': ['Bear Put Spread', 'Strategy3', 'Long Put'],
      },
    },
    {
      view: 'RangeBound',
      value: {
        '25-Apr-2024': ['Short Straddle', 'Iron Butterfly'],
        '02-May-2024': ['Short Straddle', 'Strategy1', 'Strategy2'],
        '21-Jun-2024': ['Iron Condor'],
      },
    },
    {
      view: 'Volatile',
      value: {
        '02-May-2024': ['Long Straddle', 'Strategy1'],
        '09-May-2024': ['Long Straddle', 'Strategy2'],
        '31-May-2024': ['Long Strangle', 'Long Straddle'],
      },
    },
  ];

  // Function to fetch strategies based on selected view and date
  const getStrategies = (view, date) => {
    const strategyData = strategyArray.find((item) => item.view === view);
    return strategyData?.value[date] || [];
  };

  useEffect(() => {
    const data = getStrategies(selectedView, selectedDate);
    setStrategies(data);
  }, [selectedView, selectedDate]);

  return (
    <div className="app">
      <div className="view-toggle">
        {views.map((view) => (
          <button
            key={view}
            className={selectedView === view ? 'active' : ''}
            onClick={() => setSelectedView(view)}
          >
            {view}
          </button>
        ))}
      </div>
      <DateDropdown dates={dates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      <div className="strategy-cards">
        {strategies.length > 0 ? (
          strategies.map((strategy, index) => (
            <StrategyCard key={index} name={strategy} count={strategies.filter((s) => s === strategy).length} />
          ))
        ) : (
          <p>No strategies found for {selectedDate}</p>
        )}
      </div>
    </div>
  );
};

export default App;
