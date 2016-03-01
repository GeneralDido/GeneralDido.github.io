$(function(){

// Adds class of active to nav links

    $("#home a:contains('Home')").parent().addClass("active");
    $("#about a:contains('About')").parent().addClass("active");
    $("#portfolio a:contains('Portfolio')").parent().addClass("active");
    $("#contact a:contains('Contact')").parent().addClass("active");

// Instantiate MixItUp:

	$('#projectsHome').mixItUp();

});
