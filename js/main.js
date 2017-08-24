var nav=document.getElementById('nav');
var t = 100;
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>t){
            nav.style.position = 'fixed';
            navLogo.style.display='none';
            allMeau.style.display='block';
            nav.style.top = '0';
            navSearch.style.marginTop="10px";
            nav.style.zIndex ='999';
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
            nav.style.zIndex ='999';
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
   /* $(function(){
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
    })*/
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
     $('#registBtn').click(function(){
         $('.account-main').css('display','none')
         $('.account-main2').css('display','black')
    });
    $(document).ready(function(){
        $(".accordion").accordion();
    });

})
var Focus=document.querySelector('.focus'),
        lb=Focus.querySelector('.lb'),
        li=lb.querySelectorAll('li'),
        LBtn=Focus.querySelector('.LBtn'),
        RBtn=Focus.querySelector('.RBtn'),
        dot=Focus.querySelector('.dot'),
        dotLi=dot.querySelectorAll('li');
    var imgNum=0,dotNum=0;
    var flag=true;
    var fadeInTimer,fadeOutTimer;
    for(var i=0;i<li.length;i++){
        li[i].style.zIndex=li.length-i;
    }
    //右键事件
    RBtn.onclick=function(){
        if(flag){
            flag=false;
            var _this1=li[imgNum];
            if(imgNum>=li.length-1){
                imgNum=0;
            }
            var _this2=li[imgNum+1];
            var o1=parseFloat(getComputedStyle(_this1).opacity);
            var o2=parseFloat(getComputedStyle(_this2).opacity);
            if(o1>=1){
                 fadeOut(_this1);
            }else{
                fadeIn(_this1);
            }
            if(o2>=1){
                 fadeOut(_this2);
            }else{
                fadeIn(_this2);
            }
            if(dotNum>=dotLi.length-1){
                dotNum=-1;
            }
            noBg();
            dotLi[dotNum+1].style.background="#F7B200";
            dotLi[dotNum+1].style.border='2px solid #F7B200';
            imgNum++;
            dotNum++;
        }
    };
    //左键事件
    LBtn.onclick=function(){
        if(flag){
            flag=false;
            var _this1=li[imgNum];
            if(imgNum<=0){
                imgNum=li.length-1;
            }
            var _this2=li[imgNum-1];
            var o1=parseFloat(getComputedStyle(_this1).opacity);
            var o2=parseFloat(getComputedStyle(_this2).opacity);
            if(o1>=1){
                 fadeOut(_this1);
            }else{
                fadeIn(_this1);
            }
            if(o2>=1){
                 fadeOut(_this2);
            }else{
                fadeIn(_this2);
            }if(dotNum<=0){
                dotNum=dotLi.length;
            }
            noBg();
            dotLi[dotNum-1].style.background="#F7B200";
            dotLi[dotNum-1].style.border='2px solid #F7B200';
            imgNum--;
            dotNum--;
        }
    }
    //焦点事件
    for(var i=0;i<dotLi.length;i++){
        dotLi[i].index=i;
        dotLi[i].onclick=function(){
            if(flag){
                flag=false;
                noBg();
                this.style.cssText='background:#F7B200';
                this.style.border="2px solid #F7B200";
                fadeIn(li[this.index]);
                fadeOut(li[imgNum]);
                imgNum=this.index;
                dotNum=this.index;
            }
        }   
    }
    //fadeOut(li[0]);
    //fadeIn(li[0]);
    //渐变消失
    function fadeOut(ele){
        fadeOutTimer=setInterval(function(){
            var o=parseFloat(getComputedStyle(ele).opacity);
            if(o<=0){
                clearInterval(fadeOutTimer);
                return;
            }
            ele.style.opacity=o-0.6;
            //console.log(o);
        },50);
    }
    //渐变出现
    function fadeIn(ele){
        fadeInTimer=setInterval(function(){
            var o=parseFloat(getComputedStyle(ele).opacity);
            if(o>=1){
                clearInterval(fadeInTimer);
                flag=true;
                return;
            }
            ele.style.opacity=o+0.6;
           // console.log(o);
        },50);
    }
    function noBg(){
        for(var i=0;i<dotLi.length;i++){
            dotLi[i].style.background='rgba(255,255,255,0)';
            dotLi[i].style.border='2px solid #523669';   
        }   
    }
    var autoTime;
    function autoPlay(){
    autoTime=setInterval(function(){
        RBtn.onclick();
    },1000);    
    }   
    autoPlay();
    Focus.onmouseout=function(){
        autoPlay();
    }
    Focus.onmouseover=function(){
        clearInterval(autoTime);
}   
    
    


 
   