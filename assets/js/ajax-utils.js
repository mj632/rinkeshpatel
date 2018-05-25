(function(global){
	var ajaxUtils = {};

	//=======Get request object=====//
	function getRequestObject(){
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if(window.ActiveXObject) {
			//=====Only for old IE browsers===//
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Error!!!");
			return (null);
		}
	}
	//====Ends here===//

	//==== Ajax call for Get Request ===//
	ajaxUtils.sendGetRequest = 
		function(requestUrl,responseHandler, isJsonResponse){
			var request = getRequestObject();
			request.onreadystatechange = 
				function() {
					handleResponse(request, responseHandler, isJsonResponse);
				};
			request.open("GET", requestUrl, true);
			request.send(null);		//====== This is object body part used in post request
		};

	//======Response handle function====//
	function handleResponse(request, responseHandler, isJsonResponse) {
		if((request.readyState == 4) && 
			(request.status == 200)) {

			if(isJsonResponse == undefined) {
				isJsonResponse = true;
			}

			if(isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
		}
	}
	global.$ajaxUtils = ajaxUtils;
})(window);