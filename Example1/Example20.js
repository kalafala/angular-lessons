// Credit https://www.youtube.com/watch?v=rlx1cf7qM0E&index=20&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

var myApp = angular
	.module("myModule",[])
	.controller("myController", function($scope, stringService) {
			$scope.transformString = function(input) {
				$scope.output = stringService.processString(input);
			}
	}
);

