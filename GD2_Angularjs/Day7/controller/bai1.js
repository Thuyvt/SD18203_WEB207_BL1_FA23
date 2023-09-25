function bai1CtrlHam($scope) {
    $scope.lstUser = [
        {
            username: "thuyvt66",
            pass: "123@123",
            ten: "Thúy",
            ho: "Vũ",
            tenDem : "Thị",
            ngaySinh: "Thúy"
        }
    ]
    // $scope.index = 0;
    $scope.them = function() {
        var item = {
            username: $scope.user.username,
            pass: $scope.user.pass,
            ten: $scope.user.ten,
            ho: $scope.user.ho,
            tenDem : $scope.user.tenDem,
            ngaySinh: $scope.user.ngaySinh
        }
        // thêm 1 đối tượng vào mảng
        $scope.lstUser.push($scope.user);
    }
}