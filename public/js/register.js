

$(document).ready(function() {
    $("#user").blur(checkuser);
    $("#pwd").blur(checkpwd);
    $("#repwd").blur(checkRepwd);
    $("#myform").submit(function() {
        var lyh_flag = true;
        if (!checkuser()) lyh_flag = false;
        if (!checkpwd()) lyh_flag = false;
        if (!checkRepwd()) lyh_flag = false;
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
    
    return true;
}

function checkRepwd() {
    var lyh_repwd = $("#repwd");
    var lyh_pwd = $("#pwd").val();
    if (lyh_pwd != lyh_repwd.val()) {
        lyh_repwd.attr('placeholder', '两次密码不一样！');
        lyh_repwd.attr('class', 'inputs-change');
        document.getElementById("repwd").value = "";
        return false;
    }
    return true;
}