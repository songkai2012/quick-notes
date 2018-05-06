const userModel = require('@/model/user/user.js')
const jsonWrite = require('@/server/resAop.js')

module.exports = {
    // 增加用户
    addUser: (req, res) => {
        userModel.addUser(req, res, (err, result) => {
            if (err) return jsonWrite(res, -1)

            if (res) {
                jsonWrite(res, result)
            }
        })
    },
    // 登录
    login: (req, res) => {
        const params = req.body
        const keywords = JSON.parse(Object.keys(params)[0])

        userModel.login(req, res, (err, result) => {
            if (err) return jsonWrite(res, -1)

            if (result[0] === undefined) {
                return jsonWrite(res, 0)
            }

            if (result[0].password === keywords.password) {
                return jsonWrite(res, {msg: '密码错误', code: '0'})
            } else {
                return jsonWrite(res, result)
            }
        })
    },
    // 查找用户
    getUsers: (req, res) => {
        userModel.getUsers(req, res, (err, result) => {
            if (err) return jsonWrite(res, -1)

            if (result[0] === undefined) {
                return jsonWrite(res, 0)
            } else {
                return jsonWrite(res, result)
            }
        })
    },
    // 更新用户信息
    update: (req, res) => {
        userModel.update(req, res, (err, result) => {
            if (err) return jsonWrite(res, -1)

            if (result.attectedRows === undefined) {
                return jsonWrite(res, {msg: '更新失败，请联系管理员', code: '1'})
            } else {
                return jsonWrite(res, {msg: 'success', code: '0'})
            }
        })
    },
    // 修改密码
    modifyPassword: (req, res) => {
        userModel.modifyPassword(req, res, (err, result) => {
            if (err) return jsonWrite(res, -1)

            if (result.attectedRows === undefined) {
                return jsonWrite(res, {msg: '更新失败，请联系管理员', code: '1'})
            } else {
                return jsonWrite(res, {msg: 'success', code: '0'})
            }
        })
    }
}
