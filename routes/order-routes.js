const express = require('express');

const {
  getOrders,
  getOrder,
  deleteOrder,
  addOrder,
  updateOrder,
} = require('../controllers/order-controller');


const requireAuth = require('../middleware/requireAuth')
const router = express.Router();

router.post('/orders', addOrder);

router.use(requireAuth)

router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.delete('/orders/:id', deleteOrder);
router.patch('/orders/:id', updateOrder);


module.exports = router;