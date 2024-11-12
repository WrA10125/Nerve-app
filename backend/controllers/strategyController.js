const Strategy = require('../models/Strategy');
exports.getStrategiesByDate = async (req, res) => {
  const { view, date } = req.params;
  try {
    const data = await Strategy.findOne({ view, date });
    res.json(data ? data.strategies : []);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};


exports.addStrategy = async (req, res) => {
  const { view, date, strategies } = req.body;
  try {
    const newStrategy = new Strategy({ view, date, strategies });
    await newStrategy.save();
    res.status(201).json(newStrategy);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add strategy' });
  }
};
