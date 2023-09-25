var app = angular.module("myLab3_4", ["ngRoute"]);

// Khai báo controller
app.controller("bai1Ctrl", bai1CtrlHam);
app.controller("bai2Ctrl", bai2Ctrl);
app.controller("bai3Ctrl", bai3Ctrl);
app.controller("bai4Ctrl", bai4Ctrl);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/bai1", {
        templateUrl: "./pages/bai1.html",
        controller: "bai1Ctrl",
    })
    .when("/bai2", { 
        templateUrl: "./pages/bai2.html",
        controller: "bai2Ctrl",
    })
    .when("/bai3", {
        templateUrl: "./pages/bai3.html",
        controller: "bai3Ctrl",
    })
    .when("/thanh-toan/:bai4/:tongTien", { 
        templateUrl: "./pages/bai4.html",
        controller: "bai4Ctrl",
    })

});