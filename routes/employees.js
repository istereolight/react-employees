const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { all, add, remove, employee, edit } = require('../controllers/employees');

// /api/employees
router.get('/', auth, all);
// /api/employees/:id
router.get('/:id', auth, employee);
// /api/employees/add
router.post('/add', auth, add);
// /api/employees/remove/:id
router.post('/remove/:id', auth, remove);
// /api/employees/edit/:id
router.put('/edit/:id', auth, edit);


module.exports = router;



/**
 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxNTQ2YjRiLTkxZTAtNGQ0MS04ZmU5LWFkMzNkZGNkYzdhMiIsImlhdCI6MTcxNTE2NDUyMSwiZXhwIjoxNzE3NzU2NTIxfQ.3ji1W98kOIg8jsW3rEPN_j1qn9cf7Be5M9eXOW6uW1o

 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYzMTA2NTY5LTdkZGMtNDQxYS1hYWEyLWNlYjI1NDYwNTliYSIsImlhdCI6MTcxNTE2MjE3OSwiZXhwIjoxNzE3NzU0MTc5fQ.-M_dKTbwb6oUckY8MTWvSpfwifvjgEQQqR8-LEXK2_o

 */

