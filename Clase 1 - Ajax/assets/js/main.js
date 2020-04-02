$( document ).ready(function() {


    $("#handle_ajax").click(function(){
        $.ajax({
            url: "https://reqres.in/api/users",
            success: function(response){
               // console.log(response.data);
                var listado = $("#list");
    
                $.each(response.data, function(index,elements) {
                    console.log(elements.first_name);
                    listado.append('<div class="card"><h2>' + elements.first_name + '</h2><img src="'+ elements.avatar +'"></div>');
                });
    
            },
            error: function(e){
                console.log("Hubo un error", e);
            },
            beforeSend: function () { $("#loader").show(); console.log('buscando data')},           
            complete: function () { $("#loader").hide(); console.log('data buscada!') }
        });
    });

        $("#handle_ajax_delete").click(function(){
            $("#list").html("");
        })

    });



