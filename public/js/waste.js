/*
 * @Author: your name
 * @Date: 2021-03-30 09:58:03
 * @LastEditTime: 2021-05-03 16:45:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\src\js\waste.js
 */
if (document.cookie != 'null') {
    $.get('/getWaste', function (data) {
        for (let i = 0; i < data.length; i++) {
            if (document.cookie == data[i].wastename) {
                $('.content').append(
                    `
                    <h2>${data[i].wastename}属于什么垃圾？</h2>
                    它属于：<h3>${data[i].result}</h3>
                    <p><h2>扩展知识:</h2>${data[i].extend}</p>
                    <p>发布时间：${data[i].time}</p>
                     `
                )
                document.cookie = null;
            }
        }
    })
} else{
    $(function () {
        $.get('/waste', function (data) {
            console.log(data)
            if(data[0]==undefined){
                $('.content').append('未查询到此垃圾！')
            }else{
                for(let i = 0;i<data.length;i++){
                    $('.content').append(
                        `
                        <div class="waste">
                        <h2>${data[i].wastename}属于什么垃圾？</h2>
                    它属于：<h3>${data[i].result}</h3>
                    <h2>扩展知识:</h2>${data[i].extend}
                    <p>发布时间：${data[i].time}</p>
                    </div>
                        `
                    )
                }
            }
        })
    })
}





