$(function() {
    // 页面载入获取登录名
    var count = localStorage.count;
    var getNumber = localStorage.getItem('phonenumber' + count);
    $("#get_username").text(getNumber);

    // 点击登录出现弹窗
    $("#immediately_regist").click(function() {
        $(".alert").show();
        $(".back").show();
    });

    // 对密码登录界面进行判断
    $("#pwd_regist").click(function() {
        var flag = true;
        var count = localStorage.count;
        for (var i = 1; i <= count; i++) {
            // 手机号码验证
            var phonenumber = "phonenumber" + i;
            var password = "pwd" + i;
            if ($("#bring_num").val() == localStorage.getItem(phonenumber)) {
                // 密码验证
                if ($("#pwd").val() == localStorage.getItem(password)) {
                    flag = false;
                }
            }
        }
        if (flag) {
            $(".error").show();
        } else {
            location.href = "index1.html";
        }
    });
    // 弹窗遍历选择
    $(".alert ul").find("li").each(function(index) {
        $(this).click(function() {
            $(this).addClass('changeList').siblings().removeClass('changeList');
            $(".choose_click").hide().eq(index).show();
        });
    });

    // 点击背景阴影弹窗消失
    $(".back").click(function() {
        $(".alert").hide();
        $(this).hide();
    });
});