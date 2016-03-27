//console.log("Hello sw_controller.js");


//Install function
function installSwkr(reg){
	//console.log("Serviceworker installed!");
}


//Check for serviceworker and register it
if ('serviceWorker' in navigator) {

	//console.log("Browser is service worker compatible");
	
	navigator.serviceWorker.register("sw.js").then(function(reg){
	
		installSwkr(reg);
	
	}).catch(function(err){
	
		console.log(err);
	
	});
	
}