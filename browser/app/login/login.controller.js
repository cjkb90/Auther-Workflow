app.controller('LoginCtrl', function($scope, $http, $state, LoginFactory){
	$scope.submitLogin = LoginFactory.submitLogin;
	$scope.logout = LoginFactory.logout;
	$scope.loggedIn = LoginFactory.loggedIn;
	$scope.check = LoginFactory.check;
	$scope.run = LoginFactory.run;
	$scope.runningUser = LoginFactory.runningUser;
	$scope.retUserId = LoginFactory.retUserId;
	$scope.check();

});