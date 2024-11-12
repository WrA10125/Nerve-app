const express = require('express');
const { getStrategiesByDate, addStrategy } = require('../controllers/strategyController');
const router = express.Router();

router.get('/:view/:date', getStrategiesByDate);
router.post('/', addStrategy);

module.exports = router;
