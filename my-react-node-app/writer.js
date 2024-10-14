exports.writer = function (text) {
    var fs = require('fs')
    var data = new Date().toLocaleString() + ' - ' + text + '\n'
    fs.appendFile('log.txt', data, function (err) {
        if (err) {
            // append failed
        } else {
            // done
        }
    })
}
