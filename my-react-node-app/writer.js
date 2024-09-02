exports.writer = function (text) {
    var fs = require('fs')
    var data = Date() + ' - ' + text + '\n'
    fs.appendFile('log.txt', data, function (err) {
        if (err) {
            // append failed
        } else {
            // done
        }
    })
}
