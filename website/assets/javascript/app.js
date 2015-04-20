$(document).ready(function() {
 setInterval(rotateImages, 3000);
});

function rotateImages(){
 $("#photoShow").animate({marginLeft: "-400px"}, 1000).delay(3000);

 $("#photoShow").animate({marginLeft: "-800px"}, 1000).delay(3000);

 $("#photoShow").animate({marginLeft: "-1200px"}, 1000).delay(3000);

 $("#photoShow").animate({marginLeft: "-1600px"}, 1000).delay(3000);

 $("#photoShow").animate({marginLeft: "-0px"}, 1000).delay(3000);

 }
