var phoneCatApp = angular.module('phoneCatApp',[
	'ngRoute',
	'phonecatControllers',
	'phonecatFilters',
	'phonecatServices',
	'ngAnimate',
	'phonecatAnimations']);

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