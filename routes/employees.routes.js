const express = require('express');
const router = express.Router();
const EmployeesController = require('../controllers/employees.controller');

router.get('/employees', EmployeesController.getAll);
router.get('/employees/random', EmployeesController.getRandom);
router.get('/employees/:id', EmployeesController.getById);
router.post('/employees', EmployeesController.insert);
router.put('/employees/:id', EmployeesController.update);
router.delete('/employees/:id', EmployeesController.remove);

module.exports = router;
