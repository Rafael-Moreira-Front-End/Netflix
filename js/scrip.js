const hd = document.getElementById('hd');
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 100){
        hd.classList.add('nav_black');
    }else{
        hd.classList.remove('nav_black');
    }
})


$('.sliders').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2
});



var iconMenu = document.querySelectorAll('.icon');

	iconMenu[0].addEventListener('click',()=>{
			//Efeito de opacidade.
			
			let menu = document.getElementById('menu2');
			if(menu.classList.contains('hide')){
				menu.classList.add('show');
				menu.classList.remove('hide');
			}else{
				menu.classList.add('hide');
				menu.classList.remove('show');
			}

});


$(function(){

    $('.navegar-itens').click(function(){
        $('.navegar-itens').find('ul').slideToggle();
    })


});



