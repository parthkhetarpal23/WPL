function loadData() {
	$.ajax({

		 url: "books.xml",
		 dataType: "xml",
		 success: function(data) {
		        //alert("Success")
		        $(data).find('book').each(function(){
					var category = $(this).attr('category');
					var title = $(this).find('title').text();
					var author = $(this).find('author').each(function(){$(this).append(" , ")}).text();
					var author1 = author.substring(0,author.length-2);
					var year = $(this).find('year').text();
					var price = $(this).find('price').text();
		            var result = '<tr><td>' + title + '</td><td>' + author1 + '</td><td>' + category + '</td><td>' + year + '</td><td>' + price + '</td><tr><br>';
					$("table").append(result);
		        });
		 },
		 error: function() { alert("error loading file");  }
     });
}
