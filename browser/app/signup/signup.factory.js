'use strict';

app.factory('SignupFactory', function($http, $state){
	var SignupFactory = {};

	SignupFactory.signup = function(signupInfo){
		return $http.post('/api/users', signupInfo)
		.then(function(response){
			return $http.post('/api/login', signupInfo);
		})
		.then(function(response){
			$state.go('users');
		})
		.catch(function(err){
			console.log(err);
		})

	};

	return SignupFactory;
});