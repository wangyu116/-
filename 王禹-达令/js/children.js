/**
 * Created by Administrator on 2016/9/19.
 */
$("#note-box").mouseover(function () {
   $("#note").css("display","block");
    $("#note-box").css("display","block")
});

$.get("json/product.json",function (da) {
    var url=window.location.href;

    var num_id=url.split("?");

    var num_ids=num_id[1];
    var str="";
    for(var z=0;z<da.length;z++){
        if(da[z].id==num_ids){
            cookie.fnSet("id"+num_ids,(da[z].id),"/","7");
            str+=
        '<div class="detail-link">'+
                '<ul>'+
                '<li>'+
                '<a href="###" >'+
                '<span class="ico-home"></span>'+
                '</a>'+
                '<span class="ico-to"></span>'+
                '</li>'+
                '<li>'+
                '资生堂可悠然美肌沐浴露500ml（碧耶悠悠）'+
        '</li>'+
            '</ul>'+
            '</div>'+
        '<div class="detail-intro clear">'+
                '<div class="goods-show">'+
                '<div class="goods-big">'+
                '<img src="'+da[z].imgres+'" class="goods-big-img" >'+
                '</div>'+
                '<div class="share clear">'+
                '<div class="f1">'+
                '<div class="share-btn" >'+
                '<a href="###" class="share-btn-inner">'+
                '<span class="icon-share"></span>'+
                '分享'+
                '</a>'+
                '</div>'+
                '</div>'+
                '<div class="f1 pf40">'+
                '<a href="###">'+
                '<span class="ico-collect"></span>'+
                '收藏'+
                '</a>'+
                '</div>'+
                '<div class="tip-note-box fr note-hover" id="note-box">'+
                '<span class="tip-note">'+
                '<div class="tip-title">'+
                '<span class="ico-infonote"></span>'+
                '消费者告知书'+
                '<span class="ico-5-4"></span>'+
                '</div>'+
                '<div class="note" id="note">'+
                '<div>'+
                '尊敬的客户：<br>'+
                '您好！<br>'+
            '在您选购境外商品前，麻烦您仔细阅读此文，同意本文所告知内容后再进行下单购买:' +
            '<br>'+
            '1.您在本（公司）网站上购买的境外商品为产地直销商品，仅限个人自用不得进行再销'+
            '售，商品本身可能无中文标签，您可以查看网站的翻译或者在线联系我们的客服。<br>'+
            '2.您购买的境外商品适用的品质、健康、标识等项目使用标准符合原产国使用标准，' + '可能与我国标准有所不同，所以在使用过程中由此可能产生的危害或损失以及其他风险，将由您个' +
                '承担。<br>'+
            '3.您在本（公司）网站上购买保税区发货的境外商品时，自动视为由达令极速免税店代'+
                '您向海关进行申报和代缴税款。<br>'+
            '<p style="padding-top: 15px">谢谢！</p><br>'+

            '<p style="text-align: right">北京普缇客科技有限公司</p>'+
                '</div>'+
                '</div>'+
                '</span>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '<div class="goods-data">'+
                '<h1 class="clear">'+
                ''+da[z].title_rede_1+''+
            '</h1>'+
            '<dl class="goods-price clear">'+
                '<dt>'+
                '达令价'+
                '</dt>'+
                '<dd>'+
                '<div class="clear">'+
                '<div class="f1">'+
                '￥'+
                '<span class="f30 bold">' +
        ''+da[z].new_now_price+''+
                '</span>'+
                '</div>'+
                '</div>'+
                '<p>'+
                '海外限时售价'+
                '<span>'+da[z].new_now_price+'</span>'+
            '<span class="price-off">9.4折</span>'+
            '</p>'+
            '</dd>'+
            '</dl>'+
            '<dl class="goods-function clear">'+
                '<ul> <li> 收藏： <span>68</span></li></ul></dl><dl class="goods-number clear">'+
                '<dt>购买数量</dt><dd> <div class="number"><a href="###" class="btn-reduce">'+
                '<span class="ico-u-5"></span></a><a href="###" class="btn-add"> <span class="ico-u-5"></span></a>'+
                '<input class="number-input" value="1" type="text"> </div> </dd>'+
                '</dl>'+
        '<dl class="goods-btn clear"><a href="###"> <span class="btn-buy">立即购买'+
                '</span></a><button class="cart-add"> 添加到购物车 </button></dl>'+
                '<dl class="goods-tips clear">' +
        '<span class="mr20"><span class="ico-mark-1"></span>正品保障'+
                '</span>'+
                '<span class="mr20"><span class="ico-mark-1"></span>正品保障'+
                '</span>'+
                '<span class="mr20"><span class="ico-mark-1"></span> 正品保障'+
                '</span></dl></div></div>'
        }
    }
    $(".detail").html(str);


//减
$(document).on("click",".btn-reduce",function () {
    var oP =$(this).parents(".goods-number");
    var num =oP.find(".number-input");
    var val = num.val();
    if(val<=1){
        val=2
    }
    num.val(--val);
});

// 加
$(document).on("click",".btn-add",function () {
    var oP =$(this).parents(".goods-number");
    var num =oP.find(".number-input");
    var val = num.val();
    num.val(++val);//可能要判断库存
});



$(window).on("click",".cart-add",function () {
    window.open("cart.html","_blank");
    //window.location.href="cart.html?id="+cookie.fnGet("id"+num_ids);


})

});








