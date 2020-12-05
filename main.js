let navbar=$(".navbar");
$(window).scroll(function(){
let oTop = $(".sectio-2").offset().top-window.innerHeight;
if($(window).scrolltop()>oTop){
    navbar.addclass("sticky");
}
else{
    navbar.removeclass("sticky");
}
});











let nCount=function(selector){
    $(selector).each(function(){

        $(this).animate({
            counter:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }

        })
    })

}



leta=0;
$(window).scroll(function(){
    let oTop=$(".numbers").offset().top-window.innerHeight;
        if(a==0 && $(window).scrolltop()>=oTop){
            a++;
            nCount(".rect>h1");
        }
})








