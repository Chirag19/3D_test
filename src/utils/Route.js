var $route = {};

function refresh(){
	var location = window.location;
	var origin = location.origin;  
	var pathname = location.pathname; 
	var hash = location.hash;   
	var href = location.href;
	var path = hash.split('#')[1];

	//路由参数格式化为对象
	if(path){
		var queryStr = path.split('?')[1];
		var queryObject = {}; 
		if(queryStr){
			var queryArray = queryStr.split('&');
			queryArray.map((item)=>{
				var arr = item.split('=');
				queryObject[arr[0]] = arr[1];
				return item;
			})
		}
		var push = (obj)=>{
			var to = origin + pathname +'#'; 
			console.log(obj.toString())
			if(Object.prototype.toString.call(obj) !== '[object Object]'){
				console.error('非法参数(不是一个对象)');
				return;
			}else{
				const topath = obj.path,query = obj.query;
				if(query&&Object.prototype.toString.call(query) !== '[object Object]'){
					console.error('非法参数(query不是一个对象)');
					return;
				}
				var queryString = '';
				var ask = '';
				for (var key in query) {
					ask = '?';
					queryString += key + '=' + query[key] + '&';
				}
				queryString = queryString.substr(0,queryString.length-1);
				window.location.href = to + topath + ask + queryString;
			}
		}
	}
	

	//浏览器url_history
	var history = window.history;
	$route = {
		href:href,
		path:path,
		query:queryObject,
		push:push,
		back:history.back
	}
}

var route = {
	getRoute:()=>{
		refresh();
		return $route; 
	}
}


export default route;