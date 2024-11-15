
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const strategyRoutes = require('./routes/strategyRoutes');


dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use('/api/strategies', strategyRoutes);


app.get('/', (req, res) => {
  res.send('Backend server is running successfully!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
