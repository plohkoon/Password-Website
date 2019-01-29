$(function() {

    $("#arrow").click(function() {

        if($(this).hasClass("active")) {

            $(this).removeClass("active");
            $("#loginbox").removeClass("active");

        } else {

            $(this).addClass("active");
            $("#loginbox").addClass("active");

        }

    });

    $(window).scroll(() => {

        let keyHeight = $("#firstDiv").height() - $("#topBar").height();

        if($(window).scrollTop() < keyHeight && !$("#topBar").hasClass("top")) {

            $("#topBar").addClass("top");

        }
        else if($(window).scrollTop() > keyHeight && $("#topBar").hasClass("top")) {

            $("#topBar").removeClass("top")

        }

    })

})
