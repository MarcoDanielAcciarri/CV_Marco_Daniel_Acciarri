$(document).ready(function(){

    var cantImage = $('#images img').length; //numero de sliders
    var indexImage = 1;
    var image = '';
    var imageMove;
    
    

    // Efecto Rebote
    $("nav a").on('click', function(){
        var target = $(this).attr('href');
        $(target).animate({paddingTop: '3rem'},1000);
    });
    // Fin Efecto Rebote


// SLIDER

//automatico
    //setInterval(function(){ move(1) },4000);
    $("#images").on('mouseleave',function(){
       imageMove = setInterval(function(){ move(1) },4000);
    });
    $("#images").on('mouseenter', function(){
       clearInterval(imageMove);
    });


    // botonera imagenes
    $('.botonera').on('click',function(){
        image = $(this).attr('href');
        indexImage = $(this).attr('id');
        $('#images img').fadeOut(1000);
        $(image).fadeIn(1500);
    })
    // Fin botonera imagenes


    // button next
    $('#next').on('click',function(){
        move(1);
    })
    // Fin button next

    // button after
    $('#prev').on('click',function(){
        move(-1);
    }) 
    // Fin button after



    function move(n){
        if (n == 1 && indexImage >= cantImage){ //next image
            indexImage = 0;
        }
        if (n == -1 && indexImage <= 1){ // after --> previous image
            indexImage = 4;
        }
        indexImage = indexImage + n;

        $('#images img').fadeOut(1000);
        $('#images img:nth-child('+ indexImage +')').fadeIn(1500);//mostramos el slide seleccionado
    }


    
})

