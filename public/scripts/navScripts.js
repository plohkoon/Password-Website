$(function() {

    $("#menuToggle").click(function() {

        if($(this).hasClass("active")) {

            $(this).removeClass("active");
            $(".navBar").removeClass("active");

        } else {

            $(this).addClass("active");
            $(".navBar").addClass("active");

        }

    });


    $(window).scroll(() => {

        let keyHeight = $("#firstDiv").height() - $("#topBar").height();

        if(isNaN(keyHeight)) {

            keyHeight = 1;

        }

        console.log(keyHeight);

        if($(window).scrollTop() < keyHeight && !$("#topBar").hasClass("top")) {

            $("#topBar").addClass("top");

        }
        else if($(window).scrollTop() > keyHeight && $("#topBar").hasClass("top")) {

            $("#topBar").removeClass("top")

        }

    })

})
