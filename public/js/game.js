/*
 * @Author: your name
 * @Date: 2021-03-30 09:58:03
 * @LastEditTime: 2021-05-03 16:33:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\src\js\game.js
 */

// 从数组中随机取几个元素
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
// 打乱数组函数
var randomNumber = function(){
	  // randomNumber(a,b) 返回的值大于 0 ，则 b 在 a 的前边；
      // randomNumber(a,b) 返回的值等于 0 ，则a 、b 位置保持不变；
      // randomNumber(a,b) 返回的值小于 0 ，则 a 在 b 的前边。
      return 0.5 - Math.random()
    }

$(function () {
    $.get('/getWaste', function (data) {
        let str = [];
        let str1 = [];
        let str2 = [];
        let str3 = [];
        let str4 = [];
        var num1 = Math.floor((Math.random() * 14))

            for (let i = 0; i < data.length; i++){
                if (data[i].num == 1) {
                    str1.push(data[i]) 
                } else if (data[i].num == 2) {
                    str2.push(data[i]);
                } else if (data[i].num == 3) {
                    str3.push(data[i]);
                } else  {
                    str4.push(data[i]);
                }
                
        }
        for (let a of getRandomArrayElements(str1, 5)) {
            str.push(a)
        }
        for (let a of getRandomArrayElements(str2, 5)) {
            str.push(a)
        }
        for (let a of getRandomArrayElements(str3, 5)) {
            str.push(a)
        }
        for (let a of getRandomArrayElements(str4, 5)) {
            str.push(a)
        }
        str.sort(randomNumber)//打乱数组
        for (let i = 0; i < 20; i++){
            document.getElementsByClassName('garbage')[i].classList.add('waste' + str[i].num);
            document.getElementsByClassName('garbage')[i].innerHTML = str[i].wastename;
                // console.log(str[i]);

        }
                // console.log(str);
            
        function refuseClassification() {

            let num = Math.random() * 10;
            let classify = "";
            let mark = 0;
            let time = 60;
            $('.mark').html(
                "得分: " + mark);
            if (num < 2.5) {
                classify = "厨余";
                $('.waste3').attr("data-target", "");
            } else if (num < 5) {
                classify = "可回收";
                $('.waste1').attr("data-target", "");
            } else if (num < 7.5) {
                classify = "其他";
                $('.waste4').attr("data-target", "");
            } else {
                classify = "有害";
                $('.waste2').attr("data-target", "");
            }
            $('.waste3').attr("data", "厨余");
            $('.waste1').attr("data", "可回收");
            $('.waste2').attr("data", "有害");
            $('.waste4').attr("data", "其他");
            $('#classify').html(classify + '垃圾')

            const length = $('[data-target=""]').length
            let num2 = 0;
            // console.log(length)
            $('.waste1,.waste2,.waste3,.waste4').click(function () {
                if (this.getAttribute("data-target") == "") {
                    mark += 20;
                    $('.mark').html(
                        "您的成绩为:" + mark);
                    if ($(this).parent().index() == 2) {
                        this.style.top = "30rem";
                    } else if ($(this).parent().index() == 3) {
                        this.style.top = "25rem";
                    } else if ($(this).parent().index() == 4) {
                        this.style.top = "20rem";
                    } else if ($(this).parent().index() == 5) {
                        this.style.top = "15rem";
                    }
                    if ($(this).index() == 0) {
                        this.style.left = "40%";
                    } else if ($(this).index() == 1) {
                        this.style.left = "20%";
                    } else if ($(this).index() == 2) {
                        this.style.left = "0%";
                    } else if ($(this).index() == 3) {
                        this.style.left = "-20%";
                    } else if ($(this).index() == 4) {
                        this.style.left = "-40%";
                    } 
                    // console.log(mark)
                    
                } else if (!this.getAttribute("data-target") == "") {
                    $('.modal-body').html(
                        "此垃圾为：" + this.getAttribute("data") + "垃圾，您的得分为：" + mark
                    )
                    clearInterval(timer);
                }
                if (mark >= 100) {
                    // console.log(1);
                    
                        $('.modal-body').html(
                            "恭喜您通关了!您的得分为: " + mark
                    )
                    $('.myModal').css('display','block').addClass('show')
                    $('body').addClass('modal-open').append('<div class="modal-backdrop fade show"></div>')

                }

            })
            var timer = setInterval(() => {
                time--;
                $('.timer').html(
                    "倒计时：" + time
                )
                if (time == 0) {
                    $('.modal-body').html(
                        "倒计时结束!您的得分为: " + mark
                    )
                $('.myModal').css('display','block').addClass('show')
                $('body').addClass('modal-open').append('<div class="modal-backdrop fade show"></div>')
                clearInterval(timer);

            }
                // console.log(time)
            }, 1000);
            $('.restart').click(function () {
                location.reload();
            })
        }
        refuseClassification();
    })})