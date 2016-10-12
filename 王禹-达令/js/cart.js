/**
 * Created by Administrator on 2016/9/20.
 */
$(function () {
    $.get("json/product.json",function (cart) {
        var str=document.cookie;
        var str1 = "";
        var arr = str.split("; ");
        for(var i = 0; i < arr.length; i++){
            var pId = arr[i].split("=")[0].slice(2);
            for(var z=0;z<cart.length;z++) {
                if (cart[z].id == pId) {
                    str1 +=
                        '<ul class="goods clear">' +
                        '<li class="td td-check">' +
                        '<input type="checkbox" class="ch-item">' +
                        '</li>' +
                        '<li class="td td-good">' +
                        '<a href="###" class="cover clear">' +
                        '<div class="img cover-img" style='+'"background: url('+cart[z].imgres+')no-repeat;background-size: cover"></div>' +
                        '</a>' +
                        '<a href="###" class="name clear">' +
                        '<span class="title" data-id="'+cart[z].id+'">'+cart[z].name+'</span>' +
                        '<br>' +
                        '<span>SKINFOOD思亲肤 番茄水润染色唇膏（梅果）</span>' +
                        '</a>' +
                        '</li>' +
                        '<li class="td td-price">' +
                        '<p>' +
                        '￥' +
                        '<span class="price">' +
                        '55.00' +
                        '</span>' +
                        '</p>' +
                        '</li>' +
                        '<li class="td td-number">' +
                        '<div class="clear">' +
                        '<a href="###" class="btn-number f1 btn-reduce">' +
                        '<span class="ico-reduce"></span>' +
                        '</a>' +
                        '<input type="text" value="1" class="number-in">' +
                        '<a href="###" class="btn-number f1 btn-add">' +
                        '<span class="ico-add"</span> ' +
                        '</a> ' +
                        '</div>' +
                        '</li>' +
                        '<li class="td td-total">' +
                        '￥' +
                        '<span class="total">' +
                        '55.5' +
                        '</span>' +
                        '</li>' +
                        '<li class="td td-handle">' +
                        '<a href="###" class="delete" id="delete">' +
                        '删除' +
                        '<br>' +
                        '</a>' +
                        '</li>' +
                        '</ul>'
                }
            }
        }
        //console.log(str1);
        $(".cart-list").html(str1);
        /*删除*/
        $(document).on("click",".delete",function () {
            var num = $(this).parents(".goods").find(".title").attr("data-id");
            console.log(num);
            $.cookie("id"+num,"",{path:"/",expires:-1});
            $(this).parents(".goods").remove();
        });

        /*购物车结算*/

        var $chAll = $(".ch-all");
        var $chItem = $(".ch-item");
        var $btnCont = $(".btn-cont");
        var $totalBox = $("#total-box");
        var $allNum = $("#all-num");
        var $allSum = $("#all-sum");
        var iT = $totalBox.offset().top;
        $chAll.on("click",function () {
            //判断当前是否选中
            if ($(this).prop("checked")) {
                $chItem.prop("checked",true);
                $chAll.prop("checked",true)
            } else {
                $chItem.prop("checked",false);
                $chAll.prop("checked",false)
            }
            getSum()
        });
        //事件委托
        $(document).on("click",".ch-item",function () {
            console.log($(this).prop("checked"));
            if (!$(this).prop("checked")) {
                //如果当前没有选中，就全部干掉
                $chAll.prop("checked",false)
            } else {
                var allCh = true;//假设被全选
                //判断所有的选项都能否选中
                $(".ch-item").each (function () {
                    if (!$(this).prop("checked")) {
                        //如果有一个没有被选中
                        allCh = false
                    }
                });
                $chAll.prop("checked",false);
                if (allCh) {
                    $chAll.prop("checked",true)
                }
            }
            getSum()
        });
        $chAll.click(function(){
            if($(this).prop("checked")){
                $(".ch-item").prop("checked",true)
            }else{
                $(".ch-item").prop("checked",false)
            }
            getSum();
        });

        console.log($totalBox);
        $(window).on("scroll load",function () {
            var iH = $(this).scrollTop() + $(this).height();
            console.log(iT);
            console.log(iH);
            console.log($(this).height());
            if (iH < iT) {
                $totalBox.addClass("fixed")
            } else {
                $totalBox.removeClass("fixed")
            }
        });

        /*加减*/
        $(document).on("click",".btn-reduce",function () {
            var oP =$(this).parents(".goods");
            var num =oP.find(".number-in");
            var price = oP.find(".price");
            var sum = oP.find(".total");
            var val = num.val();
            if(val<=1){
                val=2
            }
            num.val(--val);
            //金额
            sum.html(val*price.html());
            getSum()
        });
        $(document).on("click",".btn-add",function () {
            var oP =$(this).parents(".goods");
            var num =oP.find(".number-in");
            var price = oP.find(".price");
            var sum = oP.find(".total");
            var val = num.val();
            num.val(++val);//可能要判断库存

            //金额
            sum.html(val*price.html());
            getSum()
        });

        function getSum() {
            var allNum = 0;
            var allSum = 0;
            $(".ch-item:checked").each(function () {
                var oP = $(this).parents(".goods");
                var num = oP.find(".number-in");
                var sum = oP.find(".total");
                allNum += parseFloat(num.val());
                allSum += parseFloat(sum.html());
            });
            $allNum.html(allNum);
            $allSum.html(allSum);
        }
    });
});

























