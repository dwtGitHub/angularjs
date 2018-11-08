/**
 * Created by Administrator on 2017/9/12.
 */
var app=angular.module("only",['ngRoute']);

app.controller('parentCtrl',['$scope','$location',function($scope,$location){
    $scope.jump=function(url) {
        $location.path(url);

    }
}]);




//json
//index
app.controller('swiper1',swiper1);
app.controller('swiper3',swiper3);
app.controller('swiper4',swiper4);
app.controller('swiper5',swiper5);
app.controller('label1',label1);
//focus
app.controller('focusswiper1',focusswiper1);
app.controller('focus1',focus1);
app.controller('take',take);
//community
app.controller('combanner',combanner);
app.controller('comShow',comShow);
//communitylist
app.controller('time',time);
app.controller('article',article);
//tip
app.controller('senxi',senxi);


//路由
app.config(function($routeProvider){
    $routeProvider.when('/index1',{
        templateUrl:'index1.html'
    }).when('/focus',{
        templateUrl:'focus.html'
    }).when('/community',{
        templateUrl:'community.html'
    }).when('/life',{
        templateUrl:'communityList/life.html'
    }).when('/paint',{
        templateUrl:'communityList/paint.html'
    }).when('/aprilday',{
        templateUrl:'communityList/aprilday.html'
    }).when('/way',{
        templateUrl:'communityList/way.html'
    }).when('/guide',{
        templateUrl:'communityList/guide.html'
    }).when('/monologue',{
        templateUrl:'communityList/monologue.html'
    }).when('/world',{
        templateUrl:'communityList/world.html'
    }).when('/detail',{
        templateUrl:'communityList/detail.html'
    }).when('/senxi',{
        templateUrl:'tip/senxi.html'
    }).when('/weimei',{
        templateUrl:'tip/weimei.html'
    }).when('/rixi',{
        templateUrl:'tip/rixi.html'
    }).when('/oumeifeng',{
        templateUrl:'tip/oumeifeng.html'
    }).when('/qingxin',{
        templateUrl:'tip/qingxin.html'
    }).when('/me',{
        templateUrl:'me.html'
    }).otherwise({redirectTo:'/index1'});




});

//app.directive('repeatDone',function(){
//        return{
//
//            link:function(scope,element,attr){
//                if(scope.$last){
//                    scope.$eval(attr.repeatDone);
//                }
//            }
//        }
//    })
//    app.controller('',function(){
//
//        $scope.isRepeat=function(){
//            var swiper3 = new Swiper('.swiper-container3', {
//                pagination: '.swiper-pagination3',
//                slidesPerView: 4,
//                centeredSlides: true,
//                paginationClickable: true,
//                spaceBetween: 15,
//                observer:true,
//                observeParents:true
////    loop:true
//            });
//        }
//    })

//angular.module("only",['ngRoute']).directive('',function(){
//    return{
//
//        replace:true,
//        restrict:'E',
//        controller:function($scope,$http,$timeout){
//            $scope.slider=[];
//            $timeout(function(){
//                var swiper3 = new Swiper('.swiper-container3', {
//                    pagination: '.swiper-pagination3',
//                    slidesPerView: 4,
//                    centeredSlides: true,
//                    paginationClickable: true,
//                    spaceBetween: 15,
//                    observer:true,
//                    observeParents:true
//                    //loop:true
//                });
//            },50)
//        }
//    }
//
//})