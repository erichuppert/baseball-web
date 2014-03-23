function SearchController($scope, $http, $location, $rootScope) {
	$scope.$on('$viewContentLoaded', autocomplete);
	$scope.url = $rootScope.apiURL + "/atbats";
	$scope.search = function () {
		console.log($scope);
		console.log($scope.pitcher);
		console.log($scope.batter);
		// get matchups
		$http({
			url: $scope.url,
			method: "GET",
			params: {
				batter: $scope.batter,
				pitcher: $scope.pitcher
			}
		}).success(function(data, status){
			$scope.status = status;
			$scope.data = data;
			$location.path('/matchup');
			$location.search({
				b: $scope.batter,
				p: $scope.pitcher
			})
		}).error(function(data, status){
			$scope.data = data || "Request Failed";
			$scope.status = status;
		})
	}
}