function dangNhapCtrl($scope, $http, $window) {
    const apiTaiKhoan = "http://localhost:3000/taikhoan";
    $scope.user = {};
    $scope.thongBao = "";
    $scope.dangNhap = function() {
        if ($scope.user.username && $scope.user.password) {
            $http.get(apiTaiKhoan + "?username="+$scope.user.username+"&password="+ $scope.user.password)
            .then(function (response){
                alert("Đăng nhập thành công");
                $window.location.href = '#gio-hang';
            })
        } else {
            $scope.thongBao = "Nhập username/password";
        }
    }
}