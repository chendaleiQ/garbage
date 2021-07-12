/*
 * @Author: your name
 * @Date: 2021-03-30 09:58:03
 * @LastEditTime: 2021-03-31 10:40:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\src\js\index.js
 */
// const bootstrap = require("bootstrap");
const styles = require("../css/index.less")
const lunbo = require("../../tools/lunbo")
const $ = require("jquery")
const getJson = require("../../tools/getjson")
const select = require('../../tools/select')

$('#reg').on('click', function () {
    // console.log('a');
    open('./register.html')
})
$('#log').on('click', function () {
    open('./login.html')
})


