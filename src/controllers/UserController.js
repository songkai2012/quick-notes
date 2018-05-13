const userService = require('../service/user/user.js')
const router = require('express').Router()

router.get('/:name', (req, res) => {
    userService.getUsers(req, res)
})

router.post('/adduser', (req, res) => {
    userService.addUser(req, res)
})

router.post('/login', (req, res) => {
    userService.login(req, res)
})

router.post('/update', (req, res) => {
    userService.update(req, res)
})

router.post('/modifypassword', (req, res) => {
    userService.modifyPassword(req, res)
})

module.exports = router
