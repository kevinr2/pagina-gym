
$(".mira").click(function(){
    $(".ven").show(1000);
});



$(".cerrar").click(function(){
    $(".ven").hide(1000);
});


//almacenar slider en una variable
var slider = $('#slider');
//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();

$(".misi").click(function(){
    $(".mision").show(1000);
    $(".vision").hide(1000);
    $(".objetivos").hide(1000);
});
$(".visi").click(function(){
    $(".mision").hide(1000);
    $(".vision").show(1000);
    $(".objetivos").hide(1000);
});
$(".obje").click(function(){
    $(".mision").hide(1000);
    $(".vision").hide(1000);
    $(".objetivos").show(1000);
});

