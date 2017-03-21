$(function() {
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    // 手机号码验证
    $("#phoneNumber").focus(function() {
        $(this).css("border", "1px solid green");
        $(".right_img1").hide();
        $(".warn1").hide();
        $(".phone_error").hide();
    }).blur(function() {
        // 手机号码的正则
        var reg = /^1[34578]\d{9}$/;
        var phonenumber = $(this).val();
        if (reg.test(phonenumber)) {
            $(".right_img1").show();
            $(".warn1").hide();
            $(".phone_error").hide();
            $(this).css("border", "1px solid #ccc");
            flag1 = true;
        } else {
            $(".right_img1").hide();
            $(".warn1").show();
            $(".phone_error").show();
            $(this).css("border", "1px solid #f95e2f");
            flag1 = false;
        }
    });
    // 登录密码验证
    $("#pwd").focus(function() {
        $(this).css("border", "1px solid green");
        $(".right_img2").hide();
        $(".warn2").hide();
        $(".pwd_error").hide();
    }).blur(function() {
        // 登录密码的正则
        var reg = /^[0-9_a-zA-Z]{6,20}$/;
        var pwd = $(this).val();
        if (reg.test(pwd)) {
            $(".right_img2").show();
            $(".warn2").hide();
            $(".pwd_error").hide();
            $(this).css("border", "1px solid #ccc");
            flag2 = true;
        } else {
            $(".right_img2").hide();
            $(".warn2").show();
            $(".pwd_error").show();
            $(this).css("border", "1px solid #f95e2f");
            flag2 = false;
        }
    });
    // 确认密码验证
    $("#repwd").focus(function() {
        $(this).css("border", "1px solid green");
        $(".right_img3").hide();
        $(".warn3").hide();
        $(".repwd_error").hide();
    }).blur(function() {
        // 确认密码
        var pwd = $("#pwd").val();
        var repwd = $(this).val();
        if (pwd == repwd) {
            $(".right_img3").show();
            $(".warn3").hide();
            $(".repwd_error").hide();
            $(this).css("border", "1px solid #ccc");
            flag3 = true;
        } else {
            $(".right_img3").hide();
            $(".warn3").show();
            $(".repwd_error").show();
            $(this).css("border", "1px solid #f95e2f");
            flag3 = false;
        }
    });
    // 邮箱验证
    $("#email").focus(function() {
        $(this).css("border", "1px solid green");
        $(".right_img4").hide();
        $(".warn4").hide();
        $(".email_error").hide();
    }).blur(function() {
        // 邮箱的正则
        var reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        var email = $(this).val();
        if (reg.test(email)) {
            $(".right_img4").show();
            $(".warn4").hide();
            $(".email_error").hide();
            $(this).css("border", "1px solid #ccc");
            flag4 = true;
        } else {
            $(".right_img4").hide();
            $(".warn4").show();
            $(".email_error").show();
            $(this).css("border", "1px solid #f95e2f");
            flag4 = false;
        }
    });
    // 验证码验证
    $("#testCode").focus(function() {
        $(this).css("border", "1px solid green");
        $(".right_img5").hide();
        $(".code_error").hide();
    }).blur(function() {
        var code = $(this).val();
        var getCode = "12345";
        if (code == getCode) {
            $(".right_img5").show();
            $(".code_error").hide();
            $(this).css("border", "1px solid #ccc");
            flag5 = true;
        } else {
            $(".right_img5").hide();
            $(".code_error").show();
            $(this).css("border", "1px solid #f95e2f");
            flag5 = false;
        }
    });

    // 申请注册通过
    $("button").prop("disabled", true); //禁用按钮
    $("#btn_sel").click(function() {
        if ($(this).prop("checked")) {
            $("button").prop("disabled", false).css("background-color", "#ff9000").click(function() {
                if (flag1 && flag2 && flag3 && flag4 && flag5) {

                    // 保存用户信息
                    var count = localStorage.count;
                    if (!count) {
                        count = 1;
                    } else {
                        count++;
                    }
                    localStorage.setItem("phonenumber" + count, $("#phoneNumber").val());
                    localStorage.setItem("pwd" + count, $("#pwd").val());
                    localStorage.setItem("email" + count, $("#email").val());
                    localStorage.setItem("count", count);


                    // 跳转页面
                    location.href = "index2.html";
                }
            });
        } else {
            $("button").prop("disabled", true).css("background-color", "#ccc");
        }
    });
});