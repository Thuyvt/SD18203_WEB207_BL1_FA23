function gioHangCtrl($scope, $http) {
    $scope.cart = [];
    const apiGioHang = "http://localhost:3000/giohang";
    const apiHoaDon = "http://localhost:3000/hoadon";
    $scope.tongSoLuong = 0;
    $scope.thongBao = "";
    // lấy dữ liệu cart
    $http.get(apiGioHang)
    .then(function (response) {
        $scope.cart = response.data;
    })
    .catch(function (error) {})

    $scope.tinhSoLuong= function() {
        $scope.tongSoLuong = 0
        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].isChecked) {
                $scope.tongSoLuong += $scope.cart[i].soLuong;
            }
        };
    }

    $scope.xoaGioHang = function(index) {
        let id = $scope.cart[index].id;
        // lấy dữ liệu cart
        $http.delete(apiGioHang+"/"+id)
        .then(function () {
            $scope.cart.splice(index, 1);
        })
        .catch(function (error) {})
    };
    
    $scope.mua = function() {
        $scope.cart.forEach(sp => {
            if (sp.isChecked) { 
                let order = {
                    idsp: sp.id,
                    tenSp: sp.tenSp,
                    gia: sp.gia,
                    soluong: sp.soLuong,
                    tongTien: Number.parseInt(sp.gia) * Number.parseInt(sp.soLuong)
                }
                console.log(order);
                $http.post(apiHoaDon, order)
                .then(function() {
                    $scope.thongBao = "Mua hàng thành công";
                })
                .catch(function (error) {})
            }
        });
    };
}