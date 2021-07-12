var mysql = require('mysql');

/** 配置mysql的参数 */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'waste'
});

/** 数据库链接 */
connection.connect((err) => {
    if (err) { console.log("连接失败", err) }
    else { console.log("连接成功") }
})
let query = (sql, user, callback) => {
    connection.query(sql, user, function (err, rows) {
        callback(err, rows);
    });
}

exports.query = query;
