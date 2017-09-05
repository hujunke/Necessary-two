var rightBarshare=document.getElementsByClassName('rightBar-share')[0];
var shareCon=document.getElementsByClassName('shareCon')[0];
var close=document.getElementsByClassName('close')[0];
rightBarshare.onclick=function(){
	shareCon.style.display='block';
}
close.onclick=function(){
	shareCon.style.display='none';
}