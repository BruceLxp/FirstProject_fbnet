$(function() {

    // 页面加载完成获取手机号码
    var count = localStorage.count;
    var getNumber = localStorage.getItem('phonenumber' + count);
    $("#get_num").text(getNumber);

    // 生成验证码函数
    function bringCode() {
        var str = "";
        for (var i = 1; i < 5; i++) {
            var n = Math.floor(Math.random() * 62);
            if (n < 10) {
                str += n;
            } else if (n < 36) {
                str += String.fromCharCode(n + 65 - 10);
            } else {
                str += String.fromCharCode(n + 97 - 36);
            }
        }
        return str;
    }
    // 自动生成验证码
    $("#autoCheck").html(bringCode());

    // 验证码校验
    $("#confirm").click(function() {
        var youCode = $("#check_code").val();
        var autoCode = $("#autoCheck").html();
        if (youCode.toLowerCase() == autoCode.toLowerCase()) {
            location.href = "index3.html";
        } else {
            $(".check_code").show();
        }
    });

    // 点击重新申请验证码
    $("#time_list").html("30");
    $("#resend").click(function() {
        var count = 29;

        function change() {
            $("#time_list").html(count);
            count--;
            if (count == -1) {
                $("#autoCheck").html(bringCode());
                $("#time_list").html("30");
                clearInterval(timer);
            }
        }
        var timer = setInterval(change, 1000);
    });
});