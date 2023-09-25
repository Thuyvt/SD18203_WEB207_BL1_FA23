function bai2Ctrl($scope) {
    $scope.sl1 = 2;
    $scope.sl2 = 1;

    $scope.lstSp = [
        {   id : 1,
            ten: "Iphone",
            gia: 13000000,
            sl: 2
        },
        {   id : 2,
            ten: "Samsung",
            gia: 9000000,
            sl: 1
        }
    ];
    $scope.tinhTong = function () {
        for (var i = 0; i < $scope.lstSp.length; i++) {
            $scope.tongTien +=  $scope.lstSp[i].gia *  $scope.lstSp[i].sl;
        }
    }
    $scope.tongTien = 3500000;
    
    $scope.onChangeSl = function () {
        $scope.tinhTong();
    }
}