const sqlMap = {
    user: {
        add: 'INSERT INTO `user` (username,account,password,repeatPass,email,phone,card,birth,sex) VALUES(?,?,?,?,?,?,?,?,？);',
        select_name: 'select * from user;',
        update_user: 'update user set'
    }
}

module.exports = sqlMap
