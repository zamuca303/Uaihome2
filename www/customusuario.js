$(document).ready(function(){
	$('form[name = "form_user"]').submit(function(){
		var forma = $(this);
		var botao = $(this).find(':button');

		$.ajax({
			url: "ajax/controle_altera_user.php",
			type: "POST",
			data: "acao=altera&"+forma.serialize(),
			beforeSend: function(){
				botao.attr('disabled', true);
				$('.load').fadeIn('slow');
			},
			success: function(retorno){
				$('.load').fadeOut('slow', function(){
					botao.attr('disabled', false);
				});
				swal("Alteração feita com sucesso!", "...", "success");
			}
		});

		return false;
	});

});
