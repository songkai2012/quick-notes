/**
 * 实例化mysql,导出连接池
 */
const mysql = require('mysql')
const dbConfig = require('./dbConfig')

mysql.createPool(dbConfig.mysql).getConnection((err, conn) => {
    if (err) throw err
    module.exports = conn
})
