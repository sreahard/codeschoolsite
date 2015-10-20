(function(){
	$.getJSON( "/api/v1/blogPosts", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			console.log(key, val)
			console.log(val.title);
			console.log(val.body);
			console.log(val.author);
			console.log(val.date);
			items.push( "<article><h1>" + val.title + "</h1>" + "<p class=\"lead\"> by " + val.author + "</p><hr>" + "<p><span class=\"glyphicon glyphicon-time\"></span>" + " " + val.date + "</p><hr>" + val.body +"</div><hr></article>" );
		});
		$( "<div/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo( "#blog-list" );
	});
})();

(function(){
	$.getJSON( "/api/v1/blogComments", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			console.log(key, val)
			console.log(val.title);
			console.log(val.body);
			console.log(val.author);
			console.log(val.date);
			items.push( "<article><h4>" + val.name + "</h4>" + "<p>" + val.comment + "</p><hr>");
		});
		$( "<div/>", {
			"class": "my-new-comments",
			html: items.join( "" )
		}).appendTo( "#blog-comments" );
	});
})();


var newClick = new AddClicks(0);

newClick.clickMe();


