function bai4Ctrl($scope, $routeParams) {
    console.log($routeParams);
    $scope.bai = Number.parseInt($routeParams.bai4);
    $scope.tong = $routeParams.tongTien;
}