const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const videoRoutes = require('./routes/videoRoutes');
const cors = require('cors');

require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/videos' , videoRoutes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
