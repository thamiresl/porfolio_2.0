$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('stick');
        } else {
            $('.navbar').removeClass('stick');
        }
    });
});