const express = require('express')
const router = express.Router()

const loginRouter = require('./login')
const usersRouter = require('./users')

router.use('/login', loginRouter)
router.use('/users', usersRouter)

module.exports = router
