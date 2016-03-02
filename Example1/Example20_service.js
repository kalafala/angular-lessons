

myApp.factory('stringService', function() {
	var divider=1;
	return {
		processString : function(input) {
			if (!input) {
				return input;
			}
			
			var output = "";
			
			for (var i=0;i<input.length; i++) {
				if (i>0 && input[i] && input[i]==input[i].toUpperCase()) {
					output = output + " " + divider + " ";
				}
				
				output = output + input[i];
			}
			divider++;
			return output;
		}
	}
});