// 鼠标滚轮兼容
/*
	1. 第一个参数是执行动作的对象
	2.第二三个参数是回调函数   第一个函数是向上滑第二个函数是向下滑
		函数的第一个参数是执行动作的对象第二个参数是event
*/
function scroll(obj,toTop,toBottom){
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){//火狐
				obj.addEventListener('DOMMouseScroll',function(e){
					e.preventDefault();
					//console.log(e.detail)
					if(e.detail>0){//往下
						toBottom(this,e)
					}else{//往上
						toTop(this,e)
					}
				},false)
			}else{
				obj.onmousewheel=function(e){
					e.preventDefault();
					//console.log(e.wheelDelta)
					if(e.wheelDelta<0){//往下
						toBottom(this,e)
					}else{//往上
						toTop(this,e)
					}
				}
			}
}