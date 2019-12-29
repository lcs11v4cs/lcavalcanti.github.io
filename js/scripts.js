$(window).load(function(){
/* Verifica Largura e Altura */
	//Variáveis
	var larguraTela;
	var alturaTela;

	var tablet 				= 949; //Tablet Width
	var mobile 				= 480; //Mobile Width
	
	function get_width(){
		larguraTela = $(window).width();
	}
	function get_height(){
		alturaTela = $(window).height();
	}
	get_width();
	get_height();
	$(window).resize(function(){
		get_height();
		get_width();
	});
/* Verifica Largura e Altura */ 

});