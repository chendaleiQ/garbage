/*
 * @Author: your name
 * @Date: 2021-04-28 18:07:00
 * @LastEditTime: 2021-04-28 18:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project\public\js\person.js
 */

    $.get('/checkLogin', function (data) {
            console.log(data);
            $('.personal').append(
                `
                <ul>
                    <li>个人信息</li>
                    <li>用户名：${data.username}</li>
                    <li>年龄：${data.user_age}</li>
                    <li>手机号：${data.user_tel}</li>
                    <li><a href="updateUser" id="update">修改</a></li>
                    <li><a href="logout">退出登录</a></li>
                </ul>
                `
            )
        }
)
// $.get('/update')