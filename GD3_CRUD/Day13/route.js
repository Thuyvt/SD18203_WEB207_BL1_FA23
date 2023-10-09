var app = angular.module('myLab56', ["ngRoute"]);

app.controller('dangNhapCtrl', dangNhapCtrl);
app.controller('gioHangCtrl', gioHangCtrl);
app.controller('hoaDonCtrl', hoaDonCtrl);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/dang-nhap/", {
        templateUrl: "./pages/dangnhap.html",
        controller: "dangNhapCtrl",
    })
    .when("/gio-hang", {
        templateUrl: "./pages/giohang.html",
        controller: "gioHangCtrl",
    })
    .when("/hoa-don", {
        templateUrl: "./pages/hoadon.html",
        controller: "hoaDonCtrl",
    })
    .otherwise({ redirectTo: "/dang-nhap" });
});
