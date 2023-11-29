require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
// const Order = require('./models/order');
const orderRouter = require('./routes/order-routes');
const userRoutes = require('./routes/user')


const URL = 'mongodb://localhost:27017/project';

const app = express();
app.use(express.json()); //необходим что бы использовать body в запросе
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешить доступ со всех источников (можно указать конкретные домены)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Разрешенные методы
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Разрешенные заголовки
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200); // Отправляем подтверждение для предварительного запроса (preflight)
  }
  next();
});

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/orders',orderRouter);
app.use('/api/user',userRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(()=>console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`))

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${ process.env.PORT}`);
});


