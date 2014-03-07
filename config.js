var HeadToHeadBaseball = angular.module('HeadToHeadBaseball', ['ngRoute']);

HeadToHeadBaseball.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'SearchController'
		})
		.when('/matchup', {
			templateUrl : 'templatess/matchup.html',
			controller  : 'MatchupController'
		})
		.otherwise({
			redirectTo: '/'
		})
});
