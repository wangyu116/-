
$(function () {
     var $proList = $("#search-stock-wrap");
     var pageRow = 8;

     $.get("json/product2.json",function (data) {
     var pageCount = Math.ceil(data.length/pageRow);
     addData(1);//初始化时第一页
         $("#page-rows").createPage({
             pageCount:pageCount, //总共有多少页
             current:1,//当前第几页
             backFn:function (page) {
             addData(page);
              }
         });
     });

   function addData(page) {
       $.get("json/product2.json",function (data) {
           var str = '';
           console.log(data);
           for(var i=(page-1)*8; i< 8*page; i++){
               if(!data[i]) {
                   break;
               }
               str+='<li class="search-stock">' +
                   '<a href="###" class="new-img" class="clear">' +
                   '<div class="a-new-img"></div>' +
                   '<div class="new-sign"></div>' +
                   '<div class="bgoption"></div>' +
                   '<div class="new-option">' +
                   '加入购物车' +
                   '<span class="ico-g-cat"></span>' +
                   '</div>' +
                   '</a>' +
                   '<div class="data">' +
                   '<p class="new-price">' +
                   '<span class="new-rede1">￥</span>' +
                   '<span class="new-now-price">56.00</span>' +
                   '<span class="new-old-price">￥104.00</span>' +
                   '</p>' +
                   '<p class="w285-title">' +
                   '<span class="title-discount">5折</span>' +
                   '<span class="title-rede1"></span>' +
                   '<a href="###">' +
                   '[美国   ·   好气色的秘密]' +
                   'Revlon' +
                   '露华浓魅彩胭脂002#' +
                   '</a>' +
                   '</p>' +
                   '<p class="search-function">' +
                   '7124人收藏' +
                   '<span class="line">|</span>' +
                   '11332条评论' +
                   '</p>' +
                   '</div>' +
                   '</li>'
           }
           $proList.html(str);

       });
   }
    $("#category").mouseover(function () {
        $("#tb-up").css("display","none");
        $("#dd").css("display","inline-block");
        $("#tb-down").css("display","inline-block")
    });
    $("#category").mouseout(function () {
        $("#tb-up").css("display","inline-block");
        $("#tb-down").css("display","none");
        $("#dd").css("display","none")
    });

    $(".search-stock").mouseover(function () {
        $(this).find(".new-option").css("display","block")
    });
    $(".search-stock").mouseout(function () {
        $(this).find(".new-option").css("display","none")
    });
});




