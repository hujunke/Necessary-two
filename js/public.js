$(function () {
    var timer=null;
    $(window).scroll(function(){
         $(this).scrollTop()<=3000 &&  $('.navList').hide();
        if($(this).scrollTop()<100){
            $('.rightBar-top').hide();
        }else{
            $('.rightBar-top').show();
        }
    })
    $('.rightBar-top').click(function(){
        if(document.documentElement.scrollTop==0){
            clearInterval(timer)
            timer=setInterval(function () {
                if(document.body.scrollTop==0){
                    clearInterval(timer)
                }
                document.body.scrollTop-=20
            },1)
        }else{
            clearInterval(timer)
            timer=setInterval(function () {
                if(document.documentElement.scrollTop==0){
                    clearInterval(timer)
                }
                document.documentElement.scrollTop-=20
            },1)
        }
    })
    $('.account-login').click(function(){
         $('.account-main').css('display','block')
         $('.account-main2').css('display','none')
    });
     $('.account-regist').click(function(){
         $('.account-main').css('display','none')
         $('.account-main2').css('display','block')
    })

})