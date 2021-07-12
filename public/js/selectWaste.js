/*
 * @Author: your name
 * @Date: 2021-04-29 11:42:34
 * @LastEditTime: 2021-05-03 16:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project (1)\public\js\selectWaste.js
 */

$.get('/getWaste', function (data) {
    
    for (let message of data) {
        $('.waste').append(
            `
                <form action="http://localhost:3000/updateWaste" method="get">
                <input type="text"  value="${message.wastename}" name="wastename">
                <input type="text"  value="${message.result}" name="result" list="list">
                <datalist id="list">
                    <option>可回收垃圾</option>
                    <option>有害垃圾</option>
                    <option>干垃圾</option>
                    <option>湿垃圾</option>
                </datalist>
                <input type="text"  value="${message.extend}"name="extend">
                <input type="date"  value="${message.time}"name="time">
                <a href="http://localhost:3000/deleteWaste?wastename=${message.wastename}">删除</a>
                <input type="submit" value="修改">
            `
        )
    }

})