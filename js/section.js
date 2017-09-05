$('.mainUl>li').each(function(){
    $(this).click(function(){
        $(this).css('border','1px solid #523669').siblings().css('border','1px solid #fff');
        console.log($(this).find('img').eq(0)[0].src)
        var url=$(this).find('img').eq(0)[0].src;
            $('.mainImg').eq(0)[0].src='../'+url.substring(url.lastIndexOf('images'))
    })
})
$('.specsUl>li').click(function(){
	$(this).addClass('lowModel-specs-active').siblings().removeClass('lowModel-specs-active');
})
// console.log(document.body.scrollTop)
var nav=document.getElementById('view-title');
var viewshopCar=document.getElementById('view-shopCar');

var t = 739;
var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop>t){
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.left = '136px';
        nav.style.zIndex ='999';
        viewshopCar.style.display='block'
    }
    else{
        nav.style.position = 'static';
        viewshopCar.style.display='none';
}
function bodyScrollTop(){
    onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>t){
        nav.style.position = 'fixed';
        nav.style.left = '136px';
        nav.style.top = '0';
        nav.style.zIndex ='99';
        viewshopCar.style.display='block'
        }
    else{
        nav.style.position = 'static';
        viewshopCar.style.display='none';
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




















// var mainUl=document.querySelector(".mainUl"),
// mainImg=document.querySelector(".mainImg"),
//     infoLi=mainUl.querySelectorAll("li");
//     for(var i=0;i<infoLi.length;i++){

//     infoLi[i].onclick=function(){
//     	// alert(1)		
// 		mainImg.src=this.getElementsByTagName('img').src;
//     	this.className="main-active";
//     	// if(this.className=="main-active"){
//      //             this.className=null;
//      //    }
//     }
// }
// for(var i=0;i<NavLi.length;i++){
//     NavLi[i].index=i;//»ñµÃ²Ëµ¥ÏÂ±ê
//     NavLi[i].onclick=function(){
//         for(var j=0;j<NavLi.length;j++){
//             if(NavLi[j].className=="noBB"){
//                 NavLi[j].className=null;
//             }
//         }
//         this.className="noBB";//É¾³ýÏÂ±ß

//         for(var j=0;j<infoLi.length;j++){
//             infoLi[j].style.display="none";
//         }
//         infoLi[this.index].style.display="block";
//         navNum=this.index-1;
//     }
// }
// border: 1px solid #523669;