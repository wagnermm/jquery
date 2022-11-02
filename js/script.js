// instancia jquery e evita conflits
// jQuery(function($) {

$(document).ready(function() { 
    
    $('.owl-carousel').owlCarousel();
    
    let titulos = $('h4')  // tag
    
    let itens = $('.feature')  // class
    
    let destaques = $('#feature')  // id
    
    console.log(titulos.first());
    
    // configuracao de produtos
    
    $('.featured-item a').addClass('btn btn-dark stretch-link');
    
    //$('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
    
    $('.featured-item h4').dblclick( function(){
        
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });
        
    });
    
    /*
    * Manipulação de eventos
    */
    $('.featured-item a').on('blur', function(event){
        
        event.preventDefault();
        
        alert('Produto esgotado');
        
    })
})


/*Exibir lista em menu hamburger */

$('.navbar-toggler').click(function(){
    $('#navbarResponsive').show();
})



/* Validação de formulário */


function validaNome(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if(this.value == "") {
            document.querySelector('.erro-nome').innerHTML = "Por favor, preencha o nome corretamente";
        } else {
            document.querySelector('.erro-nome').innerHTML = "";
        }
    });
}
let camposNome = document.querySelectorAll('input#nome');
for( let emFoco of camposNome) {
    validaNome(emFoco);
}

function validaTelefone(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        if(this.value == "") {
            document.querySelector('.erro-telefone').innerHTML = "Por favor, preencha o telefone corretamente";
        } else {
            document.querySelector('.erro-telefone').innerHTML = "";
        }
    });
}
let camposTelefone = document.querySelectorAll('input#telefone');
for(let emFoco of camposTelefone) {
    validaTelefone(emFoco);
}


function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)) {
            document.querySelector('.erro-email').innerHTML = "";
        } else {
            document.querySelector('.erro-email').innerHTML = "Por favor, preencha o e-mail corretamente";
        }
    });
}
let campusEmail = document.querySelectorAll('input#email');
for( let emFoco of campusEmail) {
    validaEmail(emFoco);
}


function validaEndereco(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault();
        
        if(this.value == "") {
            document.querySelector('.erro-endereco').innerHTML = "Por favor, preencha o endereço corretamente";
        } else {
            document.querySelector('.erro-endereco').innerHTML = "";
        }
    })
}
let campusEndereco = document.querySelectorAll('input#endereco');
for(let emFoco of campusEndereco) {
    validaEndereco(emFoco);
}



