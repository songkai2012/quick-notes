/**
 * 用户模型
 */
const conn = require('../../server/db/index.js')
const userMap = require('../../mapping/user.js')
const dateStr = (str) => new Date(str.slice(0, 7))

module.exports = {
    /**
     * 增加用户接口
     */
    addUser: (req, res, cb) => {
        const sql = userMap.user.add
        const params = req.body
        console.log(req.body)

        if (!params.name) {
            return cb(undefined, 0)
        }

        conn(pool => {
            pool.query(sql, [params.name, params.account, params.password, params.checkPass, params.email, params.phone, params.card, dateStr(params.birth), params.sex], (err, result) => {
                cb(err, result)
                // conn.release()
            })
        })
    },
    /**
     * 登录
     */
    login: (req, res, cb) => {
        let sqlName = userMap.user.select_pwd
        const params = req.body

        if (params.name) {
            sqlName += `where username = '${params.name}'`
        }

        conn(pool => {
            pool.query(sqlName, params.name, (err, result) => {
                cb(err, result)
            })
        })
    },
    /**
     * 查找用户
     */
    getUsers: (req, res, cb) => {
        let sqlName = userMap.user.select_name
        const params = req.params

        if (params.name) {
            sqlName += `where username = '${params.name}'`
        }

        conn(pool => {
            pool.query(sqlName, params.name, (err, result) => {
                cb(err, result)
            })
        })
    },
    /**
     * 更新用户信息
     * params{
     * name, account, password, checkPass, email, phone, card, birth, sex
     * }
     */
    update: (req, res, cb) => {
        let sqlUpdate = userMap.user.update_user
        const params = req.body

        if (params.id) {
            sqlUpdate += `email = '${params.email}',phone = '${params.phone}',card = '${params.card}',birth = '${params.birth}',sex = '${params.sex}' where id = ${params.id};`
        }

        conn(pool => {
            pool.query(sqlUpdate, params.id, (err, result) => {
                cb(err, result)
            })
        })
    },
    /**
     * 更新密码
     */
    modifyPassword: (req, res, cb) => {
        let sqlUpdate = userMap.user.update_user
        const params = req.body

        if (params.id) {
            sqlUpdate += `password = '${params.password}',repeatPass = '${params.checkPass}' where id = ${params.id};`
        }

        conn(pool => {
            pool.query(sqlUpdate, params.id, (err, result) => {
                cb(err, result)
            })
        })
    }
}
