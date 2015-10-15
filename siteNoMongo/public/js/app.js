
var newClick = new AddClicks(0);

newClick.clickMe();


(function(){
$.getJSON( "http://localhost:3000/api/form", function( data ) {
 var items = [];
 $.each( data, function( key, val ) {
   items.push( "<li name='" + val.name + "' id='" + val.name + "'>" + val.name + val.type +"</li>" );
   items.push( "<button class='btn btn-warning' onClick='deleteThis();' name='" + val.name + "' id='" + val.name + "'>delete</button>" );
 });
 $( "<ul/>", {
   "class": "my-new-list",
   html: items.join( "" )
 }).appendTo( "#animal-list" );
});
})();