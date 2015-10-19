(function(){
$.getJSON( "http://localhost:4000/api/v1/blogPosts", function( data ) {
 var items = [];
 $.each( data, function( key, val ) {
     console.log(key, val)
     console.log(val.title);
     console.log(val.body);
     console.log(val.author);
     console.log(val.date);
   items.push( "<h1>" + val.title + "</h1>" + "<p class=\"lead\"> by " + val.author + "</p><hr>" + "<p><span class=\"glyphicon glyphicon-time\"></span>" + " " + val.date + "</p><hr>" + val.body +"</div><hr>" );
 });
 $( "<div/>", {
   "class": "my-new-list",
   html: items.join( "" )
 }).appendTo( "#blog-list" );
});
})();


var newClick = new AddClicks(0);

newClick.clickMe();


