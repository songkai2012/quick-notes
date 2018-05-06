const userApi = require('./api/userApi')
// const fs = require('fs')
const path = require('path')
const expressControllers = require('express-controller')
// const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// 绑定控制器
expressControllers.setDirectory(path.join(__dirname, '/controllers')).bind(router)

app.use('/api/user', userApi)

app.listen(3000)
console.log('success listen at port:3000')
