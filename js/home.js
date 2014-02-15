$(document).ready(function(){
	// instantiate the typeahead UI
	$('#pitcher-input').typeahead(
		source: function(query, process){
			return $.get('http://localhost:3000/players', {name: query}, function(data){
				return process(data);
			})
		}
	});
});