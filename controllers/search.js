function SearchController($scope, $http) {
	$scope.$on('$viewContentLoaded', autocomplete);
	$scope.url = "http://localhost:3000/atbats";
	$scope.search = function () {
		console.log($scope);
		console.log($scope.pitcher);
		console.log($scope.batter);
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
			console.log(data);
		}).error(function(data, status){
			$scope.data = data || "Request Failed";
			$scope.status = status;
		})
	}
}