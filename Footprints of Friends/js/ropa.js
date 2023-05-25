$(document).ready(function() {

    $.get('https://fakestoreapi.com/products', // API donde se obtienen los datos

        function(data) {

            $('#fila').empty();

            $.each(data, function(i, item) { // Recorrer las filas devueltas por la API

                // Crear el codigo HTML para agegar filas a la tabla usando los campos de cada fila

                var fila = `
                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">

                    <div class="card-mb-4 box-shadow ">
                        <div class="text-center ">
                            <img class="card-img-top thumbnail-product " src="${item.image}" class="card-img-top " alt=" " style=width:150px;   height:150px;>
                        </div>

                        <div class="card-body ">
                            <p class="card-text ">
                                <div class="lead text-secondary fw-bold ">
                                    OFERTA
                                </div>
                                <br>
                                <div class="lead text-danger ">
                                    <span class="sale-real-price fw-bold ">${item.price}</span>
                                </div>
                                <br> 
                                ${item.title}
                            </p>
                        </div>
                    </div>
                </div>
                `;


                $('#fila').append(fila);

            });

        });

}); // Cierre del ready

// Puedes probar otras APIs en http://jsonplaceholder.typicode.com