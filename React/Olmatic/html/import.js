$("button").click( function() {
    $.getJSON( "csvjson.json", function(obj) {
     $.each(obj, function(key, value) {
            $("ul").append("<li>"+value.name+"'s age is : "+value.age+"</li>");
     });
    });
   });