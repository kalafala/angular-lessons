// Credit https://www.youtube.com/watch?v=hThmoKA9aeU&index=24&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl#t=189.23102

var app = angular.module("myModule", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
				.when("/home", {
						templateUrl:"Example23_Home.html",
						controller:"homeController"
						})
				.when("/courses", {
						templateUrl: "Example23_Courses.html",
						controller:"coursesController"
						})
				.when("/students", {
						templateUrl: "Example23_Students.html",
						controller:"studentsController"
				})
	})
	.controller("homeController", function($scope) {
			$scope.message = "Kerim Home Page";	
	})
	.controller("coursesController", function($scope) {
			$scope.courses = ["Math", "Science", "Programming"];
	})
	.controller("studentsController", function($scope) {
			$scope.students = ["Kerim", "Kristen", "Alexis", "Addison"];
	});