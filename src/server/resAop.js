const jsonWrite = (res, result) => {
    if (typeof ret === 'undefined') {
        res.send('err')
    } else {
        console.log(result)
        res.send(result)
    }
}

module.exports = jsonWrite
