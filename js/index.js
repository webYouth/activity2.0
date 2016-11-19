	
(function($){
	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
	    //alert(navigator.userAgent);  
	    $(".phonemain").css({"background-image":"url(img/iPhone.png)","background-size":"100% 100%"});
	    $(".contentmain").css({"width":"7.9rem","left":"2.1rem","top":"3rem","height":"14.3rem"});
	    $(".presentbox").css({"top":"9rem"});
	    $(".hand").css({"top":"16.5rem"});
	    $(".num1").css({"top":"14.3rem"});
	    $(".num2").css({"top":"13rem"});
	    $(".num3").css({"top":"13rem"});
	    } else if (/(Android)/i.test(navigator.userAgent)) {   //判断Android
	    //alert(navigator.userAgent); 
	    $(".phonemain").css({"background-image":"url(img/android.png)","background-size":"100% 100%"});
	    $(".contentmain").css({"width":"7.9rem","left":"2.1rem","top":"3rem","height":"14.3rem"});
	    $(".presentbox").css({"top":"9rem"});
	    $(".hand").css({"top":"16.5rem"});
	    $(".num1").css({"top":"14.2rem"});
	    $(".num2").css({"top":"13rem"});
	    $(".num3").css({"top":"13rem"});
	}
	// var timer = setTimeout(disNone,2000);
	//判断类型
	function isIos() {
		var useragent = navigator.userAgent;
		if (useragent.indexOf('iPhone') != -1) {
			return true;
		}
		return false;
	}

//判断类型
	function isiPod() {
		var useragent = navigator.userAgent;
		if (useragent.indexOf('iPod') != -1) {
			return true;
		}
		return false;
	}

//判断类型
	function isAndroid() {
		var useragent = navigator.userAgent;
		if (useragent.indexOf('Android') != -1) {
			return true;
		}
		return false;
	}

//获取ios系统版本
	function iosVersion() {
		var useragent = navigator.userAgent;
		var reg = /OS \d_?\d?_?\d?/g;
		var a = reg.exec(useragent)[0].slice(2);
		a = a.split('_');
		a[0] += '.';
		return s = a.join('');
	}

	$('.suplink').on("click", function () {
		var json = {
			"type": "M_ZDY_YDY",
			"content": {}
		};
		if (isIos()) {
			tlkgJsModl.toview(json);
		} else if (isAndroid()) {
			tlkgJsModl.toview(JSON.stringify(json));
			return false
		} else {

		}

	});

})(Zepto);
/*	function disNone(){
		$(".presentbox").css({"visibility":"hidden"});
		$(".hand").css({"visibility":"hidden"});
		$(".dog").css({"visibility":"hidden"});
		$(".img6").css({"visibility":"hidden"});
		$(".present").css({"visibility":"hidden"});
		$(".backwrap").css({"visibility":"hidden"});
	}*/



