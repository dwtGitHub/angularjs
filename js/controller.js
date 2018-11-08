/**
 * Created by Administrator on 2017/9/13.
 */
//轮播图
function swiper1($scope,$http){
    $http.get("json/index/index.json").success(function(result){
        $scope.index=result;
    });

}

function label1($scope,$http){
    $http.get("json/index/indexlabel.json").success(function(result){
        $scope.indexlabel=result;
    });

}

function swiper3($scope,$http){
    $http.get("json/index/indexfocus.json").success(function(result){
        $scope.indexfocus=result;

    });

}

function swiper4($scope,$http){
    $http.get("json/index/indexshow.json").success(function(result){
        $scope.indexshow=result;

    });

}

//function swiper5($scope,$http){
//    $http.get("json/index/indexshow.json").success(function(result){
//        $scope.indexshow=result;
//
//    });
//
//}


function swiper5($scope,$http){
    $http.get("json/index/indexplant.json").success(function(result){
        $scope.indexplant=result;

    });

}

//fucous
function focusswiper1($scope,$http){
    $http.get("json/focus/focusswiper1.json").success(function(result){
        $scope.focusswiper1=result;

    });

}

function focus1($scope,$http){
    $http.get("json/focus/focus1.json").success(function(result){
        $scope.focus1=result;

    });

}

function take($scope,$http){
    $http.get("json/focus/take.json").success(function(result){
        $scope.take=result;

    });

}
//community
function combanner($scope,$http){
    $http.get("json/community/combanner.json").success(function(result){
        $scope.combanner=result;

    });

}

function comShow($scope,$http){
    $http.get("json/community/comShow.json").success(function(result){
        $scope.comShow=result;

    });

}

function time($scope,$http){
    $http.get("json/community/time.json").success(function(result){
        $scope.time=result;

    });

}

function article($scope,$http){
    $http.get("json/community/article.json").success(function(result){
        $scope.article=result;

    });

}

function senxi($scope,$http){
    $http.get("json/tip/senxi.json").success(function(result){
        $scope.senxi=result;

    });

}