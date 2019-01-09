$(function() {

    $("#arrow").click(function() {

        if($(this).hasClass("active")) {

            $(this).removeClass("active");
            $("#loginbox").removeClass("active");

        } else {

            $(this).addClass("active");
            $("#loginbox").addClass("active");

        }

    })

})
