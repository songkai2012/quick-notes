const jsonWrite = (res, result) => {
    if (typeof result === 'undefined' || result === 0) {
        res.status(404).send('err')
    } else {
        res.status(200).send(result)
    }
}

module.exports = jsonWrite
