// Credit https://www.youtube.com/watch?v=mW25S2tiCOM&index=4&list=PLexnxRP3h0cocVm7uspMMdUkLhWoj9x-t

var myApp = angular
	.module("myModule",[])
	.controller("myController", function($scope){
		var employee = {
			firstName: "Kerim",
			lastName: "Kalafala",
			gender: "Male"
		};
	$scope.employee = employee;
});