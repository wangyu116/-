/**
 * Created by Administrator on 2016/9/10.
 */
/*注册即得*/
$("#closeBtn").click(function () {
    $(".reg-tip").css("display","none")
});
$("#da-app").mouseover(function () {
    $("#da-code").css("display","block")
});
$("#da-app").mouseout(function () {
    $("#da-code").css("display","none")
});


$("#category").mouseover(function () {
    $("#tb-up").css("display","none")
});
$("#category").mouseover(function () {
    $("#tb-down").css("display","inline-block")
});
$("#category").mouseout(function () {
    $("#tb-up").css("display","inline-block")
});
$("#category").mouseout(function () {
    $("#tb-down").css("display","none")
});


$("#dd-one").mouseover(function () {
    $("#one-drop").css("display","inline-block")
});
$("#dd-one").mouseout(function () {
    $("#one-drop").css("display","none")
});
$("#dd-two").mouseover(function () {
    $("#two-drop").css("display","inline-block")
});
$("#dd-two").mouseout(function () {
    $("#two-drop").css("display","none")
});
/*注册即得*/