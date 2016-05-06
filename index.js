var phoneCatApp = angular.module('phoneCatApp',['ngRoute']);
phoneCatApp.controller('phoneListCtrl', ['$scope', '$http',function($scope,$http){
	$http.get('phones.json').success(function(data){
		$scope.phones = data;
	});
	$scope.orderProp = "age";
}]);
phoneCatApp.controller('phoneDetailCtrl', ['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	$http.get('phoneInfo/'+$routeParams.phoneId+'.json').success(function(data){
		$scope.phone = data;
	});
}]);
phoneCatApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/phones', {
		templateUrl:'tpl/phone-list.html',
		controller:'phoneListCtrl'
	})
	.when('/phoneInfo/:phoneId',{
		templateUrl:'tpl/phone-detail.html',
		controller:'phoneDetailCtrl'
	})
	.otherwise({
		redirectTo:'/phones'
	});
}]);