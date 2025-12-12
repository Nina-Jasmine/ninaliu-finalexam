const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const globals = require('./globals');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRestaurantsRouter = require('./routes/api/restaurants');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

 
// Connect to MongoDB
// ------------------------
mongoose.connect(globals.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit if DB connection fails
  });

// ------------------------
// Swagger UI setup
// ------------------------
try {
  const swaggerDocument = YAML.load('./swagger.yaml');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
  console.error('Failed to load Swagger document:', err);
}

// ------------------------
// Middleware
// ------------------------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------
// Routes
// ------------------------
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/restaurants', apiRestaurantsRouter);

// ------------------------
// 404 handler
// ------------------------
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// ------------------------
// Error handler
// ------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;
