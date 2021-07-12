/*
 * @Author: your name
 * @Date: 2021-04-29 11:42:34
 * @LastEditTime: 2021-05-03 16:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project (1)\public\js\selectWaste.js
 */

$.get('/getUsers', function (data) {
    
    for (let message of data) {
        $('.user').append(
            `
                <form action="http://localhost:3000/deleteUser" method="get">
                <input type="text"  value="${message.username}" name="username">
                <input type="text"  value="${message.user_password}" name="user_password">
                <input type="text"  value="${message.user_age}"name="user_age">
                <input type="text"  value="${message.user_tel}"name="user_tel">
                <input type="submit" value="删除用户">
                </form>
            `
        )
    }

})