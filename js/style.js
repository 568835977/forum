

$(document).ready(function () {
    $("#fatie").click(function () {
        $(".post").show();

    });

    $(".btn").click(function () {
        var name = new Array("tou01.jpg","tou02.jpg","tou03.jpg","tou04.jpg");
        //可均衡获取0-3的随机整数
        var random = Math.floor(Math.random()*name.length);
         var $title= $(".title").val();
         var $content = $(".content").val();
         var $option = $("#select option:selected");
         var $select = $option.val();
         var $time = new Date().toLocaleString();
         var $curTime = new Date($time)

        var date = new Date("2016-08-24 15:40:16.0");
        // var time = date.format("MM-dd hh:mm");




         // alert($time.Format("yyyy-MM-dd hh:mm:ss"))
        //编辑添加文本
         var text = "<li>\n" +
             "        <img src=\"images/"+name[random]+"\">\n" +
             "        <h6>"+$title+"</h6>\n" +
             "        <span>板块:"+$select+"</span>\n" +
             "        <span>时间"+$time+"</span>\n" +
             "<p>"+$content+"</p>"+
             "<hr>"+
             "    </li>";




         $(".bbs").append(text);
        $(".post").hide();
        $(".title").val("");
        $(".content").val("");
    });
});

