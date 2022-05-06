$(document).ready(function(){

    $('#getPhoto').click(function(){
        var photo = []
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/photos',
            success: function(data){
                photo = data
            },
            error:function(err){
                console.log(err)
            },
           beforesend: function(){
                $('#getPhoto').attr('disabled', 'disabled')
                $('#getPhoto .spinner-border').toggleClass('d-none')
            },
            complate: function(){
                $('#getPhoto').removeAttr('disabled')
                $('#getPhoto .spinner-border').toggleClass('d-none')     
            },
            async: false
        })
        
        for(var p of photo){
            var col = "<div class='col-md-3'>" + 
                        "<img src='" + p.thumbnailUrl +"' class='img-fluid'>" +
                        "<p class='text-uppercase'>" + p.title + "</p>"
                        + "</div>"
            $('#row').append(col)
        }
    })

})











