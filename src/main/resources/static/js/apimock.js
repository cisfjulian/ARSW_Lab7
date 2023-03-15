//@author hcadavid

apimock=(function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];
	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];
    mockdata["Munin"] = [{author: "Munin", "points":[{"x":137,"y":82},{"x":123,"y":161}], "name": "Lailiada"},
     {author: "Munin", "points":[{"x":75,"y":12},{"x":210,"y":167}], "name": "Dacrowd"}];
    mockdata["Chacon"] = [{author: "Chacon", "points":[{"x":85,"y":82},{"x":25,"y":189}], "name": "Leprision"},
     {author: "Chacon", "points":[{"x":45,"y":32},{"x":36,"y":28}], "name": "Cathedral"}];

	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		}
	}

})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}

apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/