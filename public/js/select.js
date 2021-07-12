/*
 * @Author: your name
 * @Date: 2021-05-03 16:30:54
 * @LastEditTime: 2021-05-03 16:30:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project (1)\public\js\select.js
 */
/*
 * @Author: your name
 * @Date: 2021-05-03 15:51:27
 * @LastEditTime: 2021-05-03 15:51:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lyh-project (1)\public\js\select.js
 */
/*
 * @Author: your name
 * @Date: 2021-03-30 09:58:03
 * @LastEditTime: 2021-05-03 14:45:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \代码\src\js\select.js
 */
$('.selectButton').on('click', function () {
    const value1 = $('#selectText1')
    const value2 = $('#selectText2')
    $(function () {
        $.get('/getWaste', function (data) {
            let num = 0;
            for(field of data){
                
                if (value1.val() == field.content) {
                    
                    document.cookie = value1.val();
                    value1.val('')
                    open('waste')
                } else if (value2.val() == field.content) {
                    document.cookie = value2.val();
                    value2.val('')
                    open('waste')
                } else {
                    num++; 
                }
                
                if (num >= data.length) {                    
                    if (value2.val()==undefined||value2.val()=='') {
                        document.cookie = value1.val()+undefined ;
                        // // console.log(document.cookie.toString().slice(-9));
                    } else {
                    document.cookie = value2.val()+undefined;
                    }
                    open('waste')
                }
            }
        })
    })
})





