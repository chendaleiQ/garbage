$(document).ready(function() {
    $("#user").blur(checkuser);
    $("#pwd").blur(checkpwd);
    $("#myform").submit(function() {
        var lyh_flag = true;
        if (!checkuser()) lyh_flag = false;
        if (!checkpwd()) lyh_flag = false;
        return lyh_flag;
    });
})

function checkuser() {
    var $lyh_user = $("#user");
    if ($lyh_user.val() == "") {
        $('#user').attr('placeholder', '用户名不能为空！');
        $('#user').attr('class', 'inputs-change');
        document.getElementById("user").value = "";
        return false;
    }
    // if ($lyh_user.val() != "user1") {
    //     $('#user').attr('placeholder', '用户名输入错误！');
    //     $('#user').attr('class', 'inputs-change');
    //     document.getElementById("user").value = "";
    //     return false;
    // }
    return true;

}

function checkpwd() {
    var $lyh_pwd = $("#pwd");
    if ($lyh_pwd.val() == "") {
        $('#pwd').attr('placeholder', '密码不能为空！');
        $('#pwd').attr('class', 'inputs-change');
        return false;
    }
    if ($lyh_pwd.val().length < 6) {
        $('#pwd').attr('placeholder', '密码不能少于6位数！');
        $('#pwd').attr('class', 'inputs-change');
        document.getElementById("pwd").value = "";
        return false;
    }
    // if ($lyh_pwd.val() != "123456") {
    //     $('#pwd').attr('placeholder', '密码输入错误！');
    //     $('#pwd').attr('class', 'inputs-change');
    //     document.getElementById("pwd").value = "";
    //     return false;
    // }
    return true;
}