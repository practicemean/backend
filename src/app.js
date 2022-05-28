const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const auth_router = require('./routes/auth');
const notification_router = require('./routes/notification');
const app = express();
require("./db/db");
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/auth', auth_router);
app.use('/notifications', notification_router);
app.use(morgan('dev'));
module.exports = app;