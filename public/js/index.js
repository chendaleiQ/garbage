/*
 * @Author: your name
 * @Date: 2021-04-29 09:52:42
 * @LastEditTime: 2021-05-03 16:51:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project (1)\public\js\index.js
 */
$(function () {
    //第一张显示
    $(".pic li").eq(0).show();
    //鼠标滑过手动切换，淡入淡出
    $("#position li").mouseover(function () {
        $(this).addClass('cur').siblings().removeClass("cur");
        var index = $(this).index();
        i = index;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
        // $(".pic li").eq(index).show().siblings().hide();
        $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //自动轮播
    var i = 0;
    var timer = setInterval(play, 2000);
    //向右切换
    var play = function () {
        i++;
        i = i > 2 ? 0 : i;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    //向左切换
    var playLeft = function () {
        i--;
        i = i < 0 ? 2 : i;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
    }
    //鼠标移入移出效果
    $("#container").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(play, 2000);
    });
    //左右点击切换
    $("#prev").click(function () {
        playLeft();
    })
    $("#next").click(function () {
        play();
    })
})
$(function () {
    $.get('/getWaste', function (data) {
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var s = Math.ceil(Math.abs(Math.random() * data.length / 2 - 8));
        var s1 = s + 7;
        for (i = 0; i < data.length; i++) {
            $(".hot>ul").append(
                `
            <li><a href="waste" class="">${data[s].wastename}</a></li>
            `
            )
            s++;
            if (s > s1) {
                break
            }
        }
        $('.hot>ul>li>a').on('click', function () {
            document.cookie = $(this)[0].innerHTML;
        })
        for (i = 0; i < data.length; i++) {
            if (data[i].result == "干垃圾" && a <= 6) {
                $('.first>.bottom').append(
                    `<li><a href="waste">${data[i].wastename}是什么垃圾</a></li>`
                )
                a++;
            } else if (data[i].result == "湿垃圾" && b <= 6) {
                $('.second>.bottom').append(
                    `<li><a href="waste">${data[i].wastename}是什么垃圾</a></li>`
                )
                b++;
            } else if (data[i].result == "有害垃圾" && c <= 6) {
                $('.third>.bottom').append(
                    `<li><a href="waste">${data[i].wastename}是什么垃圾</a></li>`
                )
                c++;
            } else if (data[i].result == "可回收垃圾" && d <= 6) {
                $('.four>.bottom').append(
                    `<li><a href="waste">${data[i].wastename}是什么垃圾</a></li>`
                )
                d++;
            }
            if (a > 6 && b > 6 && c > 6 && d < 6) {
                break
            }
        }
        $('.bottom>li>a').on('click', function () {
            document.cookie = $(this)[0].innerHTML.slice(0, -5);
        })
    });
});