  function laoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		
    	
	}

    function onDeviceReady() {
		for(var i=1;i<=4;i++){
			$('#usuarios_res').append("<div class='col-xs-3 ico'><img src='img/categorias/"+i+".jpg' width='100%' /></div>");	
		}
		
    }


