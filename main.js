$(document).ready(function () {
    $("#gnb > ul > li").on("mouseenter", function () {
        $(this).find(".sub").stop().slideDown();
    });
    $("#gnb > ul > li").on("mouseleave", function () {
        $(this).find(".sub").stop().slideUp();
    });

    /* tab */
    $(".tab > li").click(function () {
        $(".tab").find("li").removeClass("on");
        $(".content").find("div").removeClass("on");

        $(this).addClass("on");

        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
    })

    /* slide */
    setInterval(function () {
        $(".frame").animate({ "top": "-400px" },
            function () {
                $(".frame>li").eq(0).appendTo(".frame");
                $('.frame').css({ "top": "0" });
            })
    }, 3000);

    /* popup */
    $("#notice>ul>li").eq(0).on("click", function () {
        $(".popup").show();
    })
    $(".close").on("click", function () {
        $(".popup").hide();
    })
});