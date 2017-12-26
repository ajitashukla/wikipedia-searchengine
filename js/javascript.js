$(document).ready(function(){
  var $input = $('div.thirteen input');
  $('body').on('click', 'div.thirteen button.btn-search', function(event) {
    event.preventDefault();
    
    $input.focus();
  })
  
  $input.keypress(function(event){

	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		$('.result').html("");
    var search;
    search = document.getElementById("search").value;
    //console.log(search);
    var URL = 'https://crossorigin.me//en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&indexpageids=1&titles=&generator=search&exsentences=2&exintro=1&explaintext=1&inprop=url%7Cdisplaytitle&gsrsearch=' + search + '&gsrnamespace=0%7C4&gsrlimit=10';
    
    $.ajax({
      url: URL,
      success: function(data){
        var datatobeused, obj;
        datatobeused = data.query.pages;
        var pids = [];
        pids = data.query.pageids;
        for (var i = 0; i < pids.length; i++){
          obj = datatobeused[pids[i]];
          $(".result").append('<h4 class = "title"><a href = "'+obj.fullurl+'" target = "_blank">'+obj.title+'</a></h4>');
          $(".result").append('<div class = "extract">'+obj.extract+'</div>');
        }
      
    }
  })
	}

});
  
})















