function autocomplete (){
	// instantiate the autocomplete UI
	$('#pitcher-name').autocomplete({
		source: function( request, response ) {
        $.get('http://localhost:3000/players', {name: request.term, positionType: 'pitcher'}
      		,function(data) {
      			var formattedPlayers = data.error ? [] : $.map(data, function(player) {
					return {
						label: player.first + " " + player.last,
						id: player.id
					};
				});
			response(formattedPlayers);
			})

		},
        select: function (event, ui) {
            var name = ui.item.label;
            var id = ui.item.id;
            $('#pitcher-id').val(id);
            $('#pitcher-id').trigger('input');
            // update what is displayed in the textbox
            this.value = name; 
            return false;
        }
	})
	$('#batter-name').autocomplete({
		source: function( request, response ) {
        $.get('http://localhost:3000/players', {name: request.term, positionType: 'batter'}
      		,function(data) {
      			var formattedPlayers = data.error ? [] : $.map(data, function(player) {
					return {
						label: player.first + " " + player.last,
						id: player.id
					};
				});
			response(formattedPlayers);
			})
		},
        select: function (event, ui) {
            var name = ui.item.label;
            var id = ui.item.id;
            $('#batter-id').val(id);
            $('#batter-id').trigger('input');
            // update what is displayed in the textbox
            this.value = name; 
            return false;
        }
	});
};