

var box = document.querySelector('.overflow');
var ul = box.querySelector('ul');
var offsetWidth = ul.offsetWidth;
var clientWidth = box.clientWidth;
var init = offsetWidth - clientWidth;
var scrollLeft = box.scrollLeft;



console.log(offsetWidth);
console.log(clientWidth);
console.log(init);
console.log(scrollLeft);

 $('.click-left').on('tap', function(){
    
    ul.style.transform += 'translateX(20px)';
    

});


$('.click-right').on('tap', function(){

    ul.style.transform += 'translateX(-20px)';


})