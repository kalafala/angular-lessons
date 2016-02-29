// Credit https://www.youtube.com/watch?v=MzqkIZLkBsU&index=6&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

var myApp = angular
	.module("myModule",[])
	.controller("myController", function($scope){
	
		var employees = [
			{firstName: "Kerim", lastName: "Kalafala", gender: "Male"},
			{firstName: "Kristen", lastName: "Kalafala", gender: "Female"},
			{firstName: "John", lastName: "Doe", gender: "Male"}
			];
		
		$scope.employees=employees;
	}
	
);

myApp.controller("kerimCtrl", function($scope) {
		var countries = [
			{name: "USA", cities: [{name: "New York"}, {name: "Rhinebeck"}, {name: "Boston"}]},
			{name: "UK", cities:  [{name: "London"}, {name: "Manchester"}]}
		];
		
		$scope.countries=countries;
});