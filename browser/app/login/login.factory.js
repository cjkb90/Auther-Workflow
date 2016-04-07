'use strict';

app.factory('LoginFactory', function($state, $http){
	var LoginFactory = {};
	var runningUser;
	LoginFactory.submitLogin = function(loginInfo){
		$http.post('/api/login', loginInfo)
		.then(function(response){
			LoginFactory.check();
			$state.go('stories');
		})
		.catch(function(err){
			console.log('ERROR IS ', err);
		});
	}

	LoginFactory.logout = function(){
		$http.get('/api/login/logout')
		.then(function(){
			runningUser = undefined;
			$state.go('users')
		});
	}

	LoginFactory.check = function(){
		return $http.get('/api/login/check')
		.then(function(response){
			if (response.data.userId){
				runningUser = response.data.userId;
			}
			else {runningUser = undefined;}
		})
		.catch(function(err){
			console.log('ERROR IS ', err);
		});
	}

	LoginFactory.retUserId = function(){
		return runningUser;
	}

	return LoginFactory;
});