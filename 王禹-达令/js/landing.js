/**
 * Created by Administrator on 2016/9/19.
 */
$(function () {
    $("#landing-btn").click(function () {
        //console.log(1);
        $(this).addClass("active");
        $("#register-btn").removeClass("active");
        $("#landing-form").css("display","block");
        $("#register-form").css("display","none")
    });
    $("#register-btn").click(function () {
        $("#landing-btn").removeClass("active");
        $(this).addClass("active");
        //console.log(2);
        $("#landing-form").css("display","none");
        $("#register-form").css("display","block")
    });

    var $mobile = $(".mobile");
    var $mobileError = $(".mobile-error");
    var $mobileError1 = $(".mobile-error1");
    var $icoUser = $(".ico-user");
    var $icoUser1 = $(".ico-user1");
    var $icoPassword = $(".ico-password");
    var $icoPassword1 = $(".ico-password1");
    var $password = $(".password");
    $mobile.focus(function () {
        //console.log(3);
        $mobileError.css("display","block");
        $icoUser1.css("display","block");
        $icoUser.css("display","none");
        $mobileError1.css("display","none");
    });

    $mobile.blur(function () {
        //console.log(4);
        $mobileError.css("display","none");
        $icoUser1.css("display","none");
        $icoUser.css("display","block");
        if (!$mobile.val().match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) {
            $mobileError1.css("display","block");
        }
    });

    $password.focus(function () {
        console.log(3);
        $icoPassword1.css("display","block");
        $icoPassword.css("display","none")
    });

    $password.blur(function () {
        //console.log(4);
        $icoPassword1.css("display","none");
        $icoPassword.css("display","block");
    })

    $(".checkbox").on("click",function () {
        if ($(this).prop("checked")) {
            $(".submit-btn1").css("background-color","red")
        } else {
            $(".submit-btn1").css("background-color","#666")
        }
    })
});


