var twitter = {};
twitter.Data = function() {
	
	var max_id = "";
	var screen_name = "byulein";
	
	if($("ul.twitter_body li:last").attr("id")){
		max_id = $("ul.twitter_body li:last").attr("id");
		max_id = parseInt(max_id) - 20;
		max_id = "&max_id=" + max_id;
	}
	
	var param = "?screen_name=" + screen_name + max_id + "&callback=?";
	
	$.getJSON("http://api.twitter.com/1/statuses/user_timeline.json" + param, function(data) {
		$(data).each(function(idx, val){
		  var url = "http://twitter.com/"+screen_name+"/status/";
		  	 var id = val.id;
    	   var id_str = val.id_str;
    	   url += id_str;
    	   var text = val.text;
    	   var created_at = val.created_at;    	   
    	   created_at = util.convert_time(created_at);
         var name = val.user.name;

         var bodyText = "<li id='"+id+"'>";
         bodyText += "<div class='name'><a href='http://twitter.com/"+screen_name+"' target='_blank'>"+name+"</a></div>";
         bodyText += "<div class='created_at'>"+created_at+"</div>";

         bodyText += "<div class='text'><a href='"+url+"' target='_blank'>" + text + "</a></div>";
         bodyText += "</li>";

    	   $("ul.twitter_body").append(bodyText);
		  });
 	});
 	
};

var blog = {};
blog.Data = function(){
	$.getJSON("http://sayjs.com/?json=1&callback=?", function(data) {
		$(data.posts).each(function(idx, val){
			var id = val.id;
			var url = val.url;
			var title = val.title;
			var excerpt = val.excerpt;
			var date = val.date;
			//date = util.convert_time(date);
			//date = Date.parse(date);
			date = date.substr(0,10);
			var bodyText = "<li id='"+id+"'>";
			//bodyText += "<div class='date'>"+date+"</div>";
			bodyText += "<div class='title'><a href='"+url+"' target='_blank'>"+title+"</a></div>";			
			
			bodyText += "</li>";
			
			$("ul.blog_body").append(bodyText);
			
		});
 	});
};



$(document).ready(function(){

  $("ul.twitter_body").delegate("li", {
    mouseover : function(){
      $(this).addClass("on");
    },
    mouseout : function(){
      $(this).removeClass("on");
    }
  });

  twitter.Data();
  blog.Data();
  $(window).scroll(function(){
  	if($(this).scrollTop() == $(document).height() - $(this).height() ){
  		//twitter.Data();
  	}
  });  
  
});
