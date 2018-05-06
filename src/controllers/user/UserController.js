const userService = require('@/service/user/user.js')

module.exports = {
    // 增加用户
    addUser: userService.addUser,
    // 登录
    login: userService.login,
    // 查找用户
    getUsers: userService.getUsers,
    // 更新用户信息
    update: userService.update,
    // 修改密码
    modifyPassword: userService.modifyPassword
}
