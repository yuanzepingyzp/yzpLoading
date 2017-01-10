var yzpLoad=angular.module("app",[]);
yzpLoad.directive("yzpLoad",function($timeout){
	return{
		scope:{
			speed:'@',
			yzpId:'@'
		},
		restrict:'E',
		template:'<canvas id={{yzpId}}></canvas>',
		replace:true,
		link:function(scope){
			$timeout(function(){new yzpLoading(scope.yzpId,scope.speed);},100);
		}
	}
})
function yzpLoading(id,speed){
	var canvas,context;

	this.width=100;
	this.height=100;
	this.color="rgb(100,200,200)";
	this.id=id;
	this.angle=0;
	this.r=this.width/4;
	this.speed=speed;
	this.clear=function(){
		context.beginPath();
		context.clearRect(this.width/2-this.r-5,this.height/2-this.r-5,2*this.r+10,2*this.r+10)
	}
	this.render=function(){
		context.beginPath();
		context.arc(this.width/2,this.height/2,this.r,0,this.angle);
		context.lineWidth=5;
		context.strokeStyle=this.color;
		context.stroke();
		context.beginPath();
		context.font="bold 10px 微软雅黑";
		context.fillStyle='white';
		context.fillText("加载中",this.width/2-16,this.height/2+5);
	};
	this.loading=function(){
		this.clear();
		var This=this;
		if(this.angle<2*Math.PI){
			this.angle=this.angle+Math.PI/180*this.speed;
		}else{
			this.angle=0;
		}
		
		this.render();
		loadAnimation=window.requestAnimationFrame(function(){This.loading()});
	};
	this.init=(function(This){
		canvas=document.getElementById(This.id);
		context=canvas.getContext("2d");
		canvas.width=This.width;
		canvas.height=This.height;
		canvas.style.backgroundColor="rgb(100,100,100)";
		canvas.style.borderRadius="5px";
		This.loading();
	})(this);
}
