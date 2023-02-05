$(document).ready(function () {

/*
Propiedad para agregar una fila a la tabla "append"
*/

    $(document).on("click", ".contacto", function () {
        var id = $(this).attr("id");
        var nombre = "";
        var apellido = "";
        var numero = "";
        $('#tabla-datos tr').each(function () {
            if ($(this).children().eq(3).html() == id) {
                nombre = $(this).children().eq(1).html();
                apellido = $(this).children().eq(2).html();
                numero = $(this).children().eq(3).html();
                $("#contenedor").html( 
                  "  < div class= center > "+
                   " <h1 style= text-align: center;>Información Contacto</h1>"+
                    " </div >"+

                    "<form class= row g-4>"+
                        "<div class=col-md-4>"+
                            "<label for=inputEmail4 class=form-label>Nombre</label>"+
                            "<input value="+nombre+" type=text class=form-control disabled>"+
                        "</div>"+
                        "<div class=col-md-4>"+
                            "<label for=inputPassword4 class=form-label>Apellido</label>"+
                            "<input value="+apellido+" type=text class=form-control disabled>"+
                        "</div>"+
                        "<div class=col-md-4>"+
                            "<label for=inputAddress class=form-label>Numero</label>"+
                            "<input value="+numero+" type=number class=form-control disabled>"+
                        "</div>"+
                        "<div class=col-12>"+
                            "<a href=contactos.html>"+
                                "<input type=button value=Aceptar></input>"+
                            "</a>"+
                        "</div>"+
                    "</form>"
                );
            }

        });

    });

});

