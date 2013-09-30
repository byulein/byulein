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
  blog.Data();
  $(window).scroll(function(){
  	if($(this).scrollTop() == $(document).height() - $(this).height() ){
  	}
  });  
  
});
