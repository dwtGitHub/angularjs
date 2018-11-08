/**
 * Created by Administrator on 2017/9/12.
 */
//var swiper = new Swiper('.swiper-container', {
//    pagination: '.swiper-pagination',
//    paginationClickable: true,
//    loop:true
//});

var swiper1 = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination1',slidesPerView: 1,
    paginationClickable: true,
//loop:true
    observer:true,
    observeParents:true
});

var swiper2 = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination2',
    slidesPerView: 4,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    observer:true,
    observeParents:true,
    loop:true
});

var swiper3 = new Swiper('.swiper-container3', {
    pagination: '.swiper-pagination3',
    slidesPerView: 4,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 15,
    observer:true,
    observeParents:true
    //loop:true
});
var swiper4 = new Swiper('.swiper-container4', {
    pagination: '.swiper-pagination4',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop:true,
    observer:true,
    observeParents:true
});
