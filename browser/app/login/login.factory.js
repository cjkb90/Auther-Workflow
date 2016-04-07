'use strict';

app.factory('LoginFactory', function($state, $http){
	var LoginFactory = {};
	LoginFactory.submitLogin = function(loginInfo){
		$http.post('/api/login', loginInfo)
		.then(function(response){
			//console.log(response);
		})
		.then(function(){
			$state.go('stories');
		})
		.catch(function(err){
			console.log(err);
		});
	}

	LoginFactory.logout = function(){
		$http.get('/api/login/logout')
		.then(function(){
			$state.go('users')
		});
	}

	return LoginFactory;
});