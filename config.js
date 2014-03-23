var HeadToHeadBaseball = angular.module('HeadToHeadBaseball', ['ngRoute']);

HeadToHeadBaseball.run(function($rootScope){
	$rootScope.apiURL = 'http://localhost:3000';
});

HeadToHeadBaseball.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'SearchController'
		})
		.when('/matchup', {
			templateUrl : 'templates/matchup.html',
			controller  : 'MatchupController'
		})
		.otherwise({
			redirectTo: '/'
		})
});

