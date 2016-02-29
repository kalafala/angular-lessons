// Credit https://www.youtube.com/watch?v=gWmOKmgnQkU&list=PLexnxRP3h0cocVm7uspMMdUkLhWoj9x-t&index=3

var myApp = angular.module("myModule",[]
);

//var myControllerFn = function($scope) {
//	$scope.message = "AngularJS Tutorial";
//}

//myApp.controller("myController", myControllerFn);

myApp.controller("myController", function($scope){
	$scope.message = "AngularJS Tutorial";
});