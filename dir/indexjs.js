$(document).ready(function(){
	//头部导航js
    
    //轮播图
     var main=document.getElementById("fsbox"),
            pic=document.getElementById("ulb"),
            lis=pic.getElementsByTagName("li"),
           imgs=pic.getElementsByTagName('a'),
            prev=document.getElementById("pre"),
            next=document.getElementById("next"),
            
            index=1,
            animated=false,
            timer=null,
            offW=main.offsetWidth,
            ulbw=ulb.style.width=offW*6+'px';
            ulb.style.left=-offW+'px';
            for(var i=0;i<lis.length;i++){
                lis[i].style.width=offW+'px';
                imgs[i].style.width=offW+'px';
            }
            function animate(offset){
                 if (offset == 0) {
                    return;
                }
                    animated=true;
                    var newleft=parseInt(pic.style.left)+offset;
                    var time=250;
                    var interval=10;
                    var speed=offset/(time/interval);
                    function go(){
                            if(speed<0 && parseInt(pic.style.left)>newleft ||speed>0 && parseInt(pic.style.left)<newleft){
                                pic.style.left=parseInt(pic.style.left)+speed+"px";
                                setTimeout(go,interval);
                            }
                        else{
                            animated=false;
                            pic.style.left=newleft+"px";
                             if(newleft<-offW*4){
                                  pic.style.left=-offW+"px";
                                }
                              if(newleft>-offW){
                                 pic.style.left=-offW*4+"px"; 
                                 }
                            }
                    }
                    go();
            }
             function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, 3000);
            }
            function stop(){
                clearTimeout(timer);
            }
            next.onclick=function(){
                if(animated==true){
                    return;
                } 
                if(index==4){
                    index=1;
                }
                else{
                    index+=1; 
                }
                 animate(-offW);
      
            }
            prev.onclick=function(){
                  if(animated==true){
                    return;
                } 
                 if(index==1){
                    index=4;
                }
                else{
                    index-=1; 
                }
                animate(offW);
                
            }
        main.onmouseover=stop;
        main.onmouseout=play;
        play();
			







	//关注我们
	$('.hv').on('mouseover',function(){
		$('.gzbd').stop().stop().css('display','block').animate({opacity:'1'},800);	
	});
	$('.hv').on('mouseout',function(){	
			$('.gzbd').stop().animate({opacity:'0'},1000).css('display','none');		
	});
   
	//head变色
	$('#head').on('mouseover',function(){
		$('#head').css({'background-color':'#fff','border-bottom':'1px solid #ccc'});
		$('.h1-con li a').css('color','#666');
		$('.fa').css({'color':'#ccc'});
		$('.h1-con li').css({'border-right':'1px solid #000'});
	
	});
	$('#head').on('mouseout',function(){
		$('#head').css({'background-color':'transparent','border-bottom':'1px solid #fff'});
		$('.h1-con li a').css('color','#fff');
		$('.fa').css({'color':'#fff'});
		$('.h1-con li').css({'border-right':'1px solid #fff'});
	});

	//一级导航
	$('.navhv').on('mouseout',function(){
		var nm=$(this).attr('data-index');
		$('.nav2').eq(nm).siblings().css({'display':'none'});
		$('.nav2').eq(nm).css({'display':'none'});
        $(this).find('a').css({'font-size':'16px','font-weight':'normal'});
		$('.hidebd').stop().animate({height:'0px'},500)
        $('.shade').hide();
	});
	$('.navhv').on('mouseover',function(){
	     nm=$(this).attr('data-index');
		$('.nav2').eq(nm).siblings().css({'display':'none'});
		$('.nav2').eq(nm).css({'display':'block'});
		$(this).find('a').css({'font-size':'17px','font-weight':'700'});
		$('.hidebd').stop().animate({height:'90px'},200);
        $('.shade').show();
	});
	$('.wyjk').on('mouseover',function(){
		$(this).find('a').css({'font-size':'17px','font-weight':'700'});
	});
	$('.wyjk').on('mouseout',function(){
		$(this).find('a').css({'font-size':'16px','font-weight':'normal'});
	});

    //二级导航
   $('.hidebd').on('mouseover',function(){
   	    $('.navhv').eq(nm).find('a').css({'font-size':'17px','font-weight':'700'});
   	    $('.nav2').eq(nm).siblings().css({'display':'none'});
   	    $('.nav2').eq(nm).css({'display':'block'});
		$('.hidebd').stop().animate({height:'90px'},0);
	});
   $('.hidebd').on('mouseout',function(){
   	$('.navhv').eq(nm).find('a').css({'font-size':'16px','font-weight':'normal'});
		$('.hidebd').stop().animate({height:'0px'},200);
		$('.nav2').css({'display':'none'});
	});
    //头部导航js结束
    

    //滑轮滚动
     $(window).bind("scroll", function(){ 
        var top = $(this).scrollTop(); 
        var scrH=$(window).height();
        /*返回顶部按钮*/
        if(top>scrH){
        	$('.backT').show();
        	$('.wder').css({'top':'-114px'});
        	$('.dyer').css({'top':'-70px'});
        	
        }
        if(top<300){
        	$('.backT').hide();
        	$('.wder').css({'top':'-64px'});
        	$('.dyer').css({'top':'-17px'});
        }


        if(top>=500){
		        $('#head').css({'background-color':'#fff','border-bottom':'1px solid #ccc','position':'fixed'});
				$('.h1-con li a').css('color','#666');
				$('.h1-con li').css({'border-right':'1px solid #000'});
				$('.nav li a').css('color','#666');
		        $('.foc').css({'border-bottom':'3px solid #000'})
		        $('.logo').css({'background-image':'url(dir/images/wdw1.png)'});
                $('.fa').css({'color':'#ccc'});
		        $('#head').on('mouseout',function(){
		$('#head').css({'background-color':'#fff','border-bottom':'1px solid #ccc','position':'fixed'});
				$('.h1-con li a').css('color','#666');
				$('.h1-con li').css({'border-right':'1px solid #000'});
				$('.nav li a').css('color','#000');
				$('.fa').css({'color':'#ccc'});
		        $('.foc').css({'border-bottom':'3px solid #000'})
		        $('.logo').css({'background-image':'url(dir/images/wdw1.png)'});

	});
        }else if(top<400){
        	    $('.nav li a').css('color','#fff');
		        $('.foc').css({'border-bottom':'3px solid #fff'})
		        $('.logo').css({'background-image':'url(dir/images/wdw2.png)'});
        	   $('.h1-con li a').css('color','#fff');
        	   $('.fa').css({'color':'#fff'});
		       $('.h1-con li').css({'border-right':'1px solid #fff'});
               $('#head').css({'background-color':'transparent','border-bottom':'1px solid #fff','position':'absolute'});

               /* $('#head').on('mouseout',function(){
		$('#head').css({'background-color':'transparent','border-bottom':'1px solid #fff','position':'absolute'});
				$('.h1-con li a').css('color','#fff');
				$('.h1-con li').css({'border-right':'1px solid #fff'});
				 $('.nav li a').css('color','#fff');
		        $('.foc').css({'border-bottom':'3px solid #fff'})
		        $('.logo').css({'background-image':'url(dir/images/wdw2.png)'});*/

	$('#head').on('mouseover',function(){
		$('#head').css({'background-color':'#fff','border-bottom':'1px solid #ccc'});
		$('.h1-con li a').css('color','#666');
		$('.h1-con li').css({'border-right':'1px solid #000'});
	    $('.nav li a').css('color','#666');
	    $('.fa').css({'color':'#ccc'});
		$('.foc').css({'border-bottom':'3px solid #000'})
		$('.logo').css({'background-image':'url(dir/images/wdw1.png)'});
	});
	$('#head').on('mouseout',function(){
		$('#head').css({'background-color':'transparent','border-bottom':'1px solid #fff'});
		$('.h1-con li a').css('color','#fff');
		$('.h1-con li').css({'border-right':'1px solid #fff'});
		$('.nav li a').css('color','#fff');
		$('.fa').css({'color':'#ccc'});
		$('.foc').css({'border-bottom':'3px solid #fff'});
		$('.logo').css({'background-image':'url(dir/images/wdw2.png)'});
	});


        }
    });
     $('.backT').on('click',function(){
        		$("html,body").animate({scrollTop: 0},500);
        		
        	});

     /*鼠标经过上移*/
     $('.mv').on('mouseover',function(){
     	$(this).stop().animate({'margin-top':'-5px'},500);
     });
     $('.mv').on('mouseout',function(){
     	$(this).stop().animate({'margin-top':'0px'},500);
     });
     $('.mvl').on('mouseover',function(){
     	$(this).stop().animate({'margin-left':'10px'},500);
     });
     $('.mvl').on('mouseout',function(){
     	$(this).stop().animate({'margin-left':'0px'},500);
     });




$('.sjwd').on('mouseover',function(){
     	$('.wder').show();
     });
     $('.sjwd').on('mouseout',function(){
     	$('.wder').hide();
     });
     $('.wxdy').on('mouseover',function(){
     	$('.dyer').show();
     });
     $('.wxdy').on('mouseout',function(){
     	$('.dyer').hide();
     });
     
     
});