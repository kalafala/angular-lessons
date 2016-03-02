// Credit https://www.youtube.com/watch?v=MzqkIZLkBsU&index=15&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

var myApp = angular
	.module("myModule",[])
	.controller("myController", function($scope){
		var employees = [
			{name: "Kerim", dateOfBirth: new Date("October 20, 1974"), gender: "Male", salary: 50000},
			{name: "Kristen", dateOfBirth: new Date("September 20, 1976"), gender: "Female", salary: 90000},
			{name: "Alexis", dateOfBirth: new Date("July 16, 2005"), gender: "Female", salary: 1000.1},
			{name: "Addison", dateOfBirth: new Date("July 23, 2008"), gender: "Female", salary: 500},
		];
		
		$scope.employees = employees;
	}
);

