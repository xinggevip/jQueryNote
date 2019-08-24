(function($){
    // 自定义插件
    $.fn.scrollList = function (options){
        var obj = options ? options : {};
        var limit = options.limit ? options.limit : 4;
        var speed = options.speed ? options.speed : 2000;
        var type = options.type ? options.type : 0;
        // console.log(limit, speed);
        var itemEle = $(this).children().first();
        // 获取元素的高度
        var itemHeight = itemEle.outerHeight() + parseFloat(itemEle.css("margin-bottom"));
        console.log( itemHeight );
        // 设置框框的高度
        $(this).height(itemHeight * limit);
        // 滚动吧
        var that = $(this);

        switch (type){
            case 0:
                setInterval(function(){
                    that.children().last().hide().prependTo(that).slideDown();
                },speed);
                break;
            case 1:
                setInterval(function(){
                    that.children().last().fadeTo(0, 0).hide().prependTo(that).slideDown().fadeTo(500,1);
                },speed);
                break;
            case 2:
                setInterval(function(){
                    that.children().eq(limit - 1).fadeOut(500,function(){
                        that.children().last().hide().prependTo(that).delay(1000).slideDown();
                    })
                },speed);
                break;
            default:
                setInterval(function(){
                    that.children().last().hide().prependTo(that).slideDown();
                },speed);
                break;
        };

    };
})(jQuery)