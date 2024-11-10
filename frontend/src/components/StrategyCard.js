// src/components/StrategyCard.js
import React from 'react';

const StrategyCard = ({ name, count }) => (
  <div className="strategy-card">
    <h3>{name}</h3>
    <p>{count} {count > 1 ? 'Strategies' : 'Strategy'}</p>
  </div>
);

export default StrategyCard;
