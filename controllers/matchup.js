function MatchupController($scope, $rootScope, $location, $http) {
	var pitcherID = $location.search().p;
	var batterID = $location.search().b;
	$scope.foo = 'bar';
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
	});
	// get pitcher
	$http({
		url: $rootScope.apiURL + "/players/" + pitcherID,
		method: "GET",
	}).success(function(data, status){
		$scope.status = status;
		$scope.pitcher = data;
	}).error(function(data, status){
		$scope.data = data || "Request Failed";
		$scope.status = status;
	});

	// get batter
	$http({
		url: $rootScope.apiURL + "/players/" + batterID,
		method: "GET",
	}).success(function(data, status){
		$scope.status = status;
		$scope.batter = data;
	}).error(function(data, status){
		$scope.data = data || "Request Failed";
		$scope.status = status;
	});
}