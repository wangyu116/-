/**
 * Created by Administrator on 2016/9/10.
 */



/*自动轮播*/
var $btnLi = $("#btn-list li");
var iNow = 0;
var animated = true;
var timer = null;

$btnLi.removeClass("radius-active").eq(0).addClass("radius-active")
autoPlay();

$("#slides li").eq(iNow).show();
$btnLi.click(function () {
    console.log(1);
    iNow = $(this).index();//让iNow=当点击的按钮的下标
    changeView()
});

function changeView() {
    $("#slides li").eq(iNow).fadeIn().siblings().fadeOut(400);
    $btnLi.removeClass("radius-active").eq(iNow).addClass("radius-active")
}

function autoPlay() {
    timer = setInterval(function () {
        iNow++;
        if (iNow > 2){
            iNow = 0
        }
        changeView()
    },3000)
}
/*自动轮播结束*/

/*换一批*/
$(".w285-list").mouseover(function () {
    $(this).find(".new-option").css("display","block")
});
$(".w285-list").mouseout(function () {
    $(this).find(".new-option").css("display","none")
});
$(function(){
    $("#new-list .box").eq(0).show();
    var iNow = 0;
    $("#break").bind("click",function () {
        iNow++;
        if (iNow>5) {
            iNow = 0;
        }
        $("#new-list").find(".box").eq(iNow).show().siblings().hide();

    });
});
/*换一批结束*/


/*大家都说好*/
$("#option li").click(function () {
    if ($(this).hasClass("active")) {
        return
    }
    $(this).addClass("active").siblings().removeClass("active");
    $(".main-good-list ul").hide().eq($(this).index()).show()
});
/*大家都说好结束*/

/*点击查看更多*/
$("#more").click(function () {
    $("#sale-list li").css("display",("block"))
});
/*点击查看更多*/

/*闪购预告*/
$(function(){
    $("#data-flash-next .box").eq(0).show();
    var iNow = 0;
    $("#flash-scroll-down").bind("click",function () {
        iNow++;
        if (iNow>5) {
            iNow = 0;
        }
        $("#data-flash-next").find(".box").eq(iNow).show().siblings().hide();
    });
    $("#flash-scroll-up").bind("click",function () {
       iNow--;
        if (iNow < 0) {
            iNow = 5
        }
        $("#data-flash-next").find(".box").eq(iNow).show().siblings().hide();
    });
});
/*闪购预告结束*/


var proData = [];
$.get("json/product.json",function (data) {
    proData = data; //所有的商品
    $(".w285").each(function () {
        var str = "";
        for (var i = 0; i < 4; i++) {
            console.log(proData[i].id);
            str += '<li class="w285-list" id="'+proData[i].id+'">' +
                '<a href="children.html?'+proData[i].id+'" target="_blank" class="new-img" class="clear">' +
                '<div class="a-new-img1" style='+'"background: url('+proData[i].imgres+')no-repeat;background-size: cover">' +
                '</div>' +
                '<div class="new-sign">' +
                '</div> ' +
                '<div class="bgoption">' +
                '</div> ' +
                '<div class="new-option">' +
                '加入购物车' +
                '<span class="ico-g-cat">' +
                '</span>' +
                '</div>' +
                '</a>' +
                '<div class="data">' +
                '<p class="new-price">' +
                '<span class="new-collect">' +
                '人收藏' +
                '</span>' +
                '<span class="new-rede1">' +
                '￥' +
                '</span>' +
                '<span class="new-now-price">' +
                ''+proData[i].new_now_price+'' +
                '</span>' +
                '<span class="new-old-price">' +
                ''+proData[i].new_old_price+'' +
                '</span>' +
                '</p>' +
                '<p class="w285-title">' +
                '<span class="title-discount">' +
                '5折' +
                '</span>' +
                '<span class="title-rede1">' +
                '</span>' +
                '<a href="children.html" class="title-rede-1">' +
                ''+proData[i].title_rede_1+'' +
                '</a> ' +
                '</p> ' +
                '</div> ' +
                '</li>'
            //console.log(proData[i].imgres)
        }
        //console.log(proData[i].imgres)
        $(".w285").html(str);
        $(".w285-list").mouseover(function () {
            $(this).find(".new-option").css("display","block")
        });
        $(".w285-list").mouseout(function () {
            $(this).find(".new-option").css("display","none")
        });
    })



});










