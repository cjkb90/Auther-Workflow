'use strict';

app.controller('SignupCtrl', function($scope, SignupFactory){
	$scope.signup = SignupFactory.signup;
});