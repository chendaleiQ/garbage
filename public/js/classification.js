/*
 * @Author: your name
 * @Date: 2021-04-29 09:52:42
 * @LastEditTime: 2021-05-03 16:52:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project (1)\public\js\classification.js
 */
$(function () {
    $.get('/getWaste', function (data) {
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        for (i = 0; i < data.length; i++) {
            if (data[i].result == "可回收垃圾" && a < 36) {
                $(".list>.rows .right1").append(
                    `
        <a href="waste" class="reWaste">${data[i].wastename}</a>
        `
                )
                a++;
            } if (data[i].result == "干垃圾" && b < 15) {
                $(".list>.rows .right2").append(
                    `
        <a href="waste" class="dryWaste">${data[i].wastename}</a>
        `
                )
                b++;
            } if (data[i].result == "湿垃圾" && c < 15) {
                $(".list>.rows .right3").append(
                    `
        <a href="waste" class="wetWaste">${data[i].wastename}</a>
        `
                )
                c++;
            } if (data[i].result == "有害垃圾" && d < 15) {
                $(".list>.rows .right4").append(
                    `
        <a href="waste" class="harmfulWaste">${data[i].wastename}</a>
        `
                )
                d++;
            }
            if (a > 36 && b > 36 && c > 36 && d > 36) {
                break;
            }
        }
        $('.rights>a').on('click', function () {
            document.cookie = $(this)[0].innerHTML
        })
    })
})
