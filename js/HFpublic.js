var nav=document.getElementById('nav');
var t = 100;
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop>t){
        nav.style.position = 'fixed';
        navLogo.style.display='none';
        allMeau.style.display='block';
        nav.style.top = '0';
        navSearch.style.marginTop="10px";
        nav.style.zIndex ='99999999';
        nav.style.display='block';
        nav.style.transition=1+'s';
        }
    else{
        nav.style.position = 'static';
        navLogo.style.display='block';
        navSearch.style.marginTop="30px";
        allMeau.style.display='none';
        nav.style.top=-200+'px';

}
function bodyScrollTop(){
    onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if(scrollTop>t){
                nav.style.position = 'fixed';
                navLogo.style.display='none';
                allMeau.style.display='block';
                nav.style.top = '0';
                navSearch.style.marginTop="10px";
                nav.style.zIndex ='99999999';
                nav.style.display='block';
                nav.style.transition=1+'s';
            }
            else{
                nav.style.position = 'static';
                navLogo.style.display='block';
                navSearch.style.marginTop="30px";
                allMeau.style.display='none';
                nav.style.top=-200+'px';
        }
    }
}
bodyScrollTop();
$(function(){
     $('.allMeau').mouseover(function(){
        $('.allMeau>p').next().css('display','block'); 
    })
    $('.allMeau>p').mouseout(function(){
        $(this).next().css('display','none')
    })
     $('.navList').mouseout(function(){
        $(this).css('display','none')
    })
})
$(function(){
     $(window).scroll(function(){
        $(this).scrollTop()<=3000 &&  $('.navList').hide();
        if($(this).scrollTop()<100){
            $('.rightBar-top').hide();

        }else{
            $('.rightBar-top').show();
        }
    })
    $('.rightBar-top').click(function(){
        $('body').animate({scrollTop:0},function(){
            return false;   
        }) 
    })
})
   


 
   