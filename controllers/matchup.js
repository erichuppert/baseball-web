function MatchupController($scope, $rootScope, $location, $http) {
	var pitcherID = $location.search().p;
	var batterID = $location.search().b;
	console.log('data');
	// get matchups
	$http({
		url: $rootScope.apiURL + "/atbats",
		method: "GET",
		params: {
			batter: batterID,
			pitcher: pitcherID
		}
	}).success(function(data, status){
		$scope.status = status;
		$scope.atbats = data;
	}).error(function(data, status){
		$scope.data = data || "Request Failed";
		$scope.status = status;
	})

	// get pitcher
	$http({
		url: $rootScope.apiURL + "/players",
		method: "GET",
		params: {
			id: pitcherID
		}
	}).success(function(data, status){
		$scope.status = status;
		$scope.pitcher = data;
		console.log('data');
	}).error(function(data, status){
		$scope.data = data || "Request Failed";
		$scope.status = status;
		console.log('data');	
	})

	// get batter
	$http({
		url: $rootScope.apiURL + "/players",
		method: "GET",
		params: {
			id: batterID
		}
	}).success(function(data, status){
		$scope.status = status;
		$scope.batter = data;
	}).error(function(data, status){
		$scope.data = data || "Request Failed";
		$scope.status = status;
	})	
}