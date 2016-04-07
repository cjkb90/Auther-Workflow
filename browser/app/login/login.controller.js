app.controller('LoginCtrl', function($scope, $http, $state, LoginFactory){
	$scope.submitLogin = LoginFactory.submitLogin;
	$scope.logout = LoginFactory.logout;

});