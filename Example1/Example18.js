// Credit https://www.youtube.com/watch?v=GsSAEh4K4Sw&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=17#t=36.429067

var myApp = angular
	.module("myModule",[])
	.controller("myController", function($scope, $http, $log){
		$http({
				method: "GET",
				url: "http://localhost:3001/getRecords"})
		.then(function (response) {
				$scope.employees=response.data;
				$log.info(response);
		}
		);
	}
);

//.config(['$httpProvider', function($httpProvider) {
//        $httpProvider.defaults.useXDomain = true;
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];
//    }
//	])
