
function checkWidth(){
    var screenWidth = $(window).width();

    //hide the hamburger icon for big screens
    if(screenWidth <= 768)
    {
        $(".hambugerIcon").show();
        $(".navigation ul").hide();
        if($("section.intro").hasClass("afterAddingNavBar"))
        {
            $("section.intro").removeClass("afterAddingNavBar");
        }
    }
    else
    {
        $(".hambugerIcon").hide();
        $(".navigation ul").show();
    }
};

function navigationProcessing(){
    $(".navigation ul").toggle('fast');
    $("section.intro").toggleClass("afterAddingNavBar");
    $(".hambugerIcon svg").toggleClass("rotatehambugerIcon");
};

//check if window is resized
$(window).on('load', checkWidth);
$(window).resize(checkWidth);

//add on click handler to the navigation
$(".navigation button").click(navigationProcessing);

//project buttons animation
$(".project-description").hide();
    $(".project").hover(
        //get current id of div
        function() {
            //get the current id of the hovered div then add visit site button
            var currentId = $(this).attr("id");
            $("#"+ currentId +" .project-description").fadeToggle();
    });
