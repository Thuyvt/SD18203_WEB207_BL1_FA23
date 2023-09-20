// Khởi tạo ứng dụng angularjs
// Khai báo các thư viện phụ thuộc
var mySPA = angular.module("mySPA", ["ngRoute"]);

// Cấu hình url, chuyển được nội dung các trang theo từng url
mySPA.config(function ($routeProvider, $locationProvider) {
    //Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    //Cấu hình chuyển trang
    $routeProvider
    .when("/trang-chu", {
        templateUrl: "./pages/trang-chu.html"
    })
    .when("/thong-ke", {
        templateUrl: "./pages/thong-ke.html"
    })
    .when("/chi-tiet", {
        templateUrl: "./pages/chi-tiet-sp.html"
    })
    .when("/qlsp", {
        templateUrl: "./pages/qlsp.html"
    })
    .otherwise({
        redirectTo: "/trang-chu"
    })
});