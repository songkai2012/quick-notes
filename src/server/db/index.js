/**
 * 实例化mysql,导出连接池
 */
const mysql = require('mysql')
const dbConfig = require('./dbConfig')

const pool = mysql.createPool(dbConfig.mysql)

module.exports = function (cb) {
    pool.getConnection((err, connection) => {
        if (err) throw err
        else {
            cb(connection)
        }
        connection.release()
    })
}
