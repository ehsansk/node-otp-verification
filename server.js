const express = require('express');
const cors = require('cors');
const sendOtp = require('./api/send-otp');
const verifyOtp = require('./api/verify-otp');

const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

app.use('/api', sendOtp);
app.use('/api', verifyOtp);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
