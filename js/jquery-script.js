//efeito de esconder formulário de cadastro


$(document).ready(function(){

    // document.getElementById("botao-cadastrar").click  -mesma função- serve para diminuir o cod 
    $("#botao-cadastrar").click(function(){


        $("#form-cadastrar").slideToggle("slow");
        //$("#form-cadastrar").hide("slow");
        $("#section-login").slideToggle("slow");

        $("botao-cadastrar").hide("");

    });

});
