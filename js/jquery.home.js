$.mobile.changePage( "index.html", { transition: "slideup"} );	

// JavaScript Document

 $(document).ready(function () {
            $("#carousel1").CloudCarousel({
                xPos: 380,
                yPos: 110,
                FPS: 30,
                reflHeight: 86,
                reflGap: 2,
                yRadius: 40,
                autoRotateDelay: 1200,
                speed: 0.2,
                mouseWheel: true,
                bringToFront: true
            });

            $(".btnback").focus(function () { $(this).blur(); });
            $(".txtsearch").focus(function () { $(this).addClass("txtsearch_hover"); }).blur(function () { if ($(this).val() == "") { $(this).removeClass("txtsearch_hover"); } });
        });
		
		
	
	 /*图片左滑*/
           $(".carousel1").bind("swipeleft",
	
                function () {
				 $.mobile.allowCrossDomainPages = true;
					
                    startLeft = mouseMove().x - parseInt(getStyle($("#carousel1")[0], "left"));
                    isMove = true;
                });
            $(document).bind("mouseup", function () {
                isMove = false;
                if (parseInt($("#carousel1")[0].style.left) > 0) {
                    $("#carousel1").animate({ "left": "0px" }, 1024);
                }

                if (parseInt($("#carousel1")[0].style.left) < maxleft) {
                    $("#carousel1").animate({ "left": maxleft + "px" }, 1024);
                }
            });
            $(".carousel1").bind("swipeleft", function () {
                if (isMove) {
                    var pos = mouseMove();
                    var top = pos.y - startLeft;
                    $("#carousel1")[0].style.left = left + "px";
                }
            });
	
	
	//弹出搜索框
	function shows(i,a){
		
		if (i.style.display == "none") {
		   i.style.display = "";
		}else{
		   i.style.display = "none";
		}
	}	
	
		function shows2(i,a){
		
		if (i.style.display == "none") {
		   i.style.display = "";
		}else{
		   i.style.display = "none";
		}
	}	
	
		
	
		
	//弹出header层		
		var id=0  
		function chk_broswer(){  
        if (navigator.appName.indexOf("Microsoft")!=-1)
		 {  
        return(true);  
         }  
         else{  
                 return(false);  
         }  
	} 
	 
	function c(css)  
	{
			ie5menu.className=css;
	} 
		 
	function showmenuie5(idh)
	{  
	   event.cancelBubble = true  
		id=idh  
	   ie5menu.style.left=document.body.scrollLeft+event.clientX  
	   ie5menu.style.top=document.body.scrollTop+event.clientY  
	   ie5menu.style.visibility="visible"  
	   
	   return false
	 }  
	 
	function hidemenuie5(){
		ie5menu.style.visibility="hidden"
	}  
	function pop(win)
	{
		window.open(win,'','')
	}  
	function linkUI(urlstring){  
		var str=urlstring+id  
		pop(str)  
	}  
			 
	if (document.all&&window.print){  
	if(chk_broswer() == true){  
		window.document.onclick = hidemenuie5;  
	} else {  
		window.onclick = hidemenuie5;  
	} 
	 
	} 
	
	
	
	
	//触屏判断
	var getDragClass=(function(){
	var SupportsTouches = ("createTouch" in document),//判断是否支持触摸
	StartEvent = SupportsTouches ? "touchstart" : "mousedown",//支持触摸式使用相应的事件替代
	MoveEvent = SupportsTouches ? "touchmove" : "mousemove",
	EndEvent = SupportsTouches ? "touchend" : "mouseup",
	$=function(id){
	return document.getElementById(id);
	},
	preventDefault=function(ev){
	if(ev)ev.preventDefault();
	else window.event.returnValue = false;
	},
	getMousePoint=function(ev){
	var x = y = 0,
	doc = document.documentElement,
	body = document.body;
	if(!ev) ev=window.event;
	if (window.pageYoffset) {
	x = window.pageXOffset;
	y = window.pageYOffset;
	}else{
	x = (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	y = (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
	}
	if(SupportsTouches){
	var evt = ev.touches.item(0);//仅支持单点触摸,第一个触摸点
	x=evt.pageX;
	y=evt.pageY;
	}else{
	x += ev.clientX;
	y += ev.clientY;
	}
	return {'x' : x, 'y' : y};
	};
	function _drag(opt){
	this.el=typeof opt.el=='string'?$(opt.el):opt.el;//被拖动节点
	this.onstart=opt.start || new Function();//
			this.onmove=opt.move || new Function();
	this.onend=opt.end || new Function();
	this.action=false;
	this.init();
	}
	_drag.prototype={
	init:function(){
	this.el.style.position='relative';
	this.el['on'+StartEvent]=this.bind(function(e){//绑定节点的 [鼠标按下/触摸开始] 事件
					preventDefault(e);
	if(this.action)return false;
	else this.action=true;
	this.startPoint=getMousePoint(e);
	this.onstart();
	document['on'+MoveEvent]=this.bind(function(e){
	preventDefault(e);//取消文档的默认行为[鼠标移动、触摸移动]
	this.nowPoint=getMousePoint(e);
	this.el.style.left=this.nowPoint.x-this.startPoint.x+'px';
	this.el.style.top=this.nowPoint.y-this.startPoint.y+'px';
	this.onmove();
	},this);
	document['on'+EndEvent]=document['ontouchcancel']=this.bind(function(){
	document['on'+EndEvent]=document['ontouchcancel']=document['on'+MoveEvent]=null;
	this.action=false;
	this.onend();
	},this);
	},this);
	},
	bind:function(fn,obj){
	return function(){
	fn.apply(obj,arguments);
	}
	}
	}
	return function(opt){
	return new _drag(opt);
	}
	})();
	
	
