const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');
const database = require('./database');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
