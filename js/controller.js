var phonecatControllers = angular.module('phonecatControllers',['ngRoute']);
phonecatControllers.controller('phoneListCtrl', ['$scope', '$http','Phone',function($scope,$http,Phone){
	/*$http.get('phones.json').success(function(data){
		$scope.phones = data;
	});*/
	$scope.phones = Phone.query();
	$scope.orderProp = "age";
}]);
phonecatControllers.controller('phoneDetailCtrl', ['$scope','$routeParams','$http','Phone',function($scope,$routeParams,$http,Phone){
	/*$http.get('phoneInfo/'+$routeParams.phoneId+'.json').success(function(data){
		$scope.phone = data;
		$scope.mainImageUrl = data.images[0];
	});*/
	$scope.phone = Phone.get({phoneId:$routeParams.phoneId},function(phone){
			$scope.mainImageUrl = phone.images[0];
	});
	$scope.setMainImage = function(imageUrl){
		$scope.mainImageUrl = imageUrl;
	};
}]);