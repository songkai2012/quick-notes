const models = require('../db/db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../db/sqlMap')

const conn = mysql.createConnection(models.mysql)

conn.connect()

const jsonWrite = (res, ret) => {
    if (typeof ret === 'undefined') {
        res.send('err')
    } else {
        console.log(ret)
        res.send(ret)
    }
}

const dateStr = (str) => new Date(str.slice(0, 7))

/**
 * 响应体{
 * code:-1 查无此人
 * code:0 密码错误
 * }
 */

/**
 * 增加用户接口
 */
router.post('/addUser', (req, res) => {
    const sql = $sql.user.add
    const params = req.body
    console.log(params)
    console.log(params.birth)
    conn.query(sql, [params.name, params.account, params.password, params.checkPass, params.email, params.phone, params.card, dateStr(params.birth), params.sex], (err, result) => {
        if (err) throw err
        if (res) {
            jsonWrite(res, result)
        }
    })
})

/**
 * 登录接口
 */
router.post('/login', (req, res) => {
    let sqlName = $sql.user.select_name
    const params = req.body
    console.log(params)

    if (params.name) {
        sqlName += `where username = '${params.name}'`
    }

    const keywords = JSON.parse(Object.keys(params)[0])

    conn.query(sqlName, params.name, (err, result) => {
        if (err) throw err
        if (result[0] === undefined) {
            res.send('-1')
        } else {
            if (result[0].password === keywords.password) {
                jsonWrite(res, result)
            } else {
                res.send('0')
            }
        }
    })
})

/**
 * 获取用户信息
 */
router.get('/getUser', (req, res) => {
    let sqlName = $sql.user.select_name
    const params = req.body

    if (params.name) {
        sqlName += `where username = '${params.name}'`
        console.log(sqlName)
    }

    conn.query(sqlName, params.name, (err, result) => {
        if (err) throw err
        if (result[0] === undefined) {
            res.send('-1')
        } else {
            jsonWrite(res, result)
        }
    })
})
/**
 * 更新用户信息
 * params{
 * name, account, password, checkPass, email, phone, card, birth, sex
 * }
 */
router.post('/update', (req, res) => {
    let sqlUpdate = $sql.user.update_user
    const params = req.body

    if (params.id) {
        sqlUpdate += `email = '${params.email}',phone = '${params.phone}',card = '${params.card}',birth = '${params.birth}',sex = '${params.sex}' where id = ${params.id};`
    }

    conn.query(sqlUpdate, params.id, (err, result) => {
        if (err) throw err
        if (result.attectedRows === undefined) {
            res.send('更新失败，请联系管理员')
        } else {
            res.send('ok', result)
        }
    })
})
/**
 * 更新密码
 */
router.post('/modifyPassword', (req, res) => {
    let sqlUpdate = $sql.user.update_user
    const params = req.body

    if (params.id) {
        sqlUpdate += `password = '${params.password}',repeatPass = '${params.checkPass}' where id = ${params.id};`
    }
    conn.query(sqlUpdate, params.id, (err, result) => {
        if (err) throw err
        if (result.attectedRows === undefined) {
            res.send('更新失败，请联系管理员')
        } else {
            res.send('ok', result)
        }
    })
})

module.exports = router
