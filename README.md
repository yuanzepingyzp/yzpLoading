# yzpLoading
基于canvas及angular的加载组件
##USEAGE
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
	</head>
	<body ng-app="app">
		<yzp-load yzp-id="yzpLoading" speed=3></yzp-load>
		<script type="text/javascript" src="angular.js"></script>
		<script type="text/javascript" src="yzpLoading.js"></script>
	</body>
</html>
```
##API
```html
    <yzp-load yzp-id="yzpLoading" /*String define the id of the canvas element,neccesary attribute*/
              speed=3/*Number define the animation speed of the component,not neccesary default value is 3*/
              ></yzp-load>
```
##总结
###angular指令中的link函数是在template渲染到页面之前就执行的，所以直接在link中是无法直接通过id获取canvas元素的，解决方法是使用$timeout延迟执行link函数中的函数
