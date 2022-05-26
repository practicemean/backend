const express = require('express');
const morgan = require('morgan')
const auth_router = require('./routes/auth');
const notification_router = require('./routes/notification');
const app = express();
app.use(express.json());

app.use('/auth', auth_router);
app.use('/notifications', notification_router )

app.use(morgan('dev'));
module.exports = app;