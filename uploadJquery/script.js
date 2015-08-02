$(document).ready(function() {
    $('#botonSubidor').click(uploadAjax);
});

function uploadAjax() {
        var inputFileImage = document.getElementById("archivo");
        var file = inputFileImage.files[0];
        var data = new FormData();

        data.append('archivo', file);
        var url = "upload.php";
        $.ajax({
            url: url,
            type: 'POST',
            contentType: false,
            data: data,
            processData: false,
            cache: false
        }).done(function(data){
        	if(data.ok){
        		console.log("se subio con exito")
        	}else {
        		alert(data.msg)
        	}
        });

    }
