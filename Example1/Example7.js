// Credit https://www.youtube.com/watch?v=MzqkIZLkBsU&index=6&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

var myApp = angular
	.module("myModule",[])
	.controller("myController", function($scope){
	
		var languages = [
			{name: "C++", likes: 0, dislikes: 0},
			{name: "NodeJS", likes:0, dislikes: 0},
			{name: "AngularJS", likes:0, dislikes: 0}
			];
		
		$scope.languages=languages;
		
		$scope.incrementLikes = function(technology) {
			technology.likes++;
		}
		
		$scope.incrementDislikes = function(technology) {
			technology.dislikes++;
		}
	}
	
);

