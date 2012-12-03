 var startTop = 0;
        var isMove = false;
        var li;
        $(document).ready(function () {
            /*文本框切换*/
            $(".btnback").focus(function () { $(this).blur(); });
            $(".txtsearch").focus(function () { $(this).addClass("txtsearch_hover"); }).blur(function () { if ($(this).val() == "") { $(this).removeClass("txtsearch_hover"); } });

            var maxTop = parseInt(getStyle($("#content_left")[0], "height")) - parseInt(getStyle($("#content_left ul li")[0], "height")) * $("#content_left ul li").size();

            /*左菜单效果*/
            $(".content_left ul").bind("mousedown",
                function () {
                    startTop = mouseMove().y - parseInt(getStyle($("#content_left ul")[0], "top"));
                    isMove = true;
                });
            $(document).bind("mouseup", function () {
                isMove = false;
                if (parseInt($("#content_left ul")[0].style.top) > 0) {
                    $("#content_left ul").animate({ "top": "0px" }, 400);
                }

                if (parseInt($("#content_left ul")[0].style.top) < maxTop) {
                    $("#content_left ul").animate({ "top": maxTop + "px" }, 400);
                }
            });
            $(".content_left ul").bind("mousemove", function () {
                if (isMove) {
                    var pos = mouseMove();
                    var top = pos.y - startTop;
                    $("#content_left ul")[0].style.top = top + "px";
                }
            });

            // Level 1 Menu click
            $(".content_left ul li").bind("click", function () {
                var _index = $(this).index();
                if (li != this) {
                    $("#menu_2").animate({ "margin-left": "-180px" }, 0, function () { $(this).animate({ "margin-left": "80px" }, 400) });
                }
                $("#menu_2>ul>li").hide().eq(_index).show();
				$(".mike").hide();

                if (_index == 5) {
					$(".mike").show();
                    $(".explain").show().html("4英寸Super Clear LCD (可丽屏)，极致纤薄清晰绚丽。Android™ 2.2智能操作系统，尽享万千热门应用。1GHz 高速处理器，畅快体验淋漓尽致。");
                }
                else
                { $(".explain").hide().html(""); }
                $("#video").html("");


                $(this).parent().find("span").removeClass("span_color");  //字体颜色
                $(this).parent().find("div").removeClass("display_block"); //箭头
                $(this).find("span:eq(0)").addClass("span_color");      //字体颜色
                $(this).find("div:eq(0)").addClass("display_block");    //箭头
                li = this;
            });

            // Level 2 Menu click
            $("#menu_2>ul>li li").bind("click", function () {
                var _index = $("#menu_2>ul>li li").index(this);
                //$(this).parent().parent().hide();
                $("#menu_2").animate({ "margin-left": "-320px" }, 400);
                $("#menu_3>ul>li").hide().eq(_index).show();
                li = this;
            });

            // Level 3 Menu click
            var vedios = ["naozong.mp4", "duanxin.mp4", "feixingmoshi.mp4", "qiangzhi.mp4", "shijianriqi.mp4", "WIFI.mp4", "yuyan.mp4"];
            var explains = ["设置、连接并查找局域网络", "设置、连接并查找局域网络", "打开和关闭飞行模式", "设置闹钟", "更改桌面背景（墙纸）", "设置、调整系统显示时间和日期", "选择和设置系统显示语言"];
            $("#menu_3>ul>li li").bind("click", function () {
                var _index = $("#menu_3>ul>li li").index(this);
                $(".explain").show().html(explains[_index]);

                $("#video").html("<video id='myVideo1' height='400' width='240' autoplay='autoplay'>" +
                                    "<source src='video/" + vedios[_index] + "' type='video/mp4' />" +
                                    "<p>Your browser does not support the video tag.</p>" +
				                "</video>");
								$(".mike").show();
            });
        });

        // 鼠标坐标
        function mousePosition(ev) {
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            return {
                x: ev.clientX + scrollLeft - document.documentElement.clientLeft,
                y: ev.clientY + scrollTop - document.documentElement.clientTop
            };
        }

        // 鼠标事件
        function mouseMove(ev) {
            ev = ev || window.event;
            var mousePos = mousePosition(ev);
            return { x: mousePos.x, y: mousePos.y };
        }
        //获取CSS样式表属性
        function getStyle(node, property) {
            if (node.style[property]) {
                return node.style[property];
            }
            else if (node.currentStyle) {
                return node.currentStyle[property];
            }
            else if (document.defaultView && document.defaultView.getComputedStyle) {
                var style = document.defaultView.getComputedStyle(node, null);
                return style.getPropertyValue(property);
            }
            return null;
        }

 