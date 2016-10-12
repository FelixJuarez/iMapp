var conn;
 function checkConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'YES';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'YES';
    states[Connection.CELL_4G]  = 'YES';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if(states[networkState]=="YES"){
		conn="YES";
	}else{
		conn="NO";
	}
}

		 	function init() {			
			
			checkConnection();
			
			if(conn == "YES"){
				
				 $.getJSON('http:diarweb.com/respuesta.php',function(data){
				console.log(JSON.stringify(data));
					var datos;
					var tr;
						for (var i = 0; i < data.length; i++) {
							tr = $('<tr/>');
								alert(data[i].nombre);
								
							
						}
						
			
			  
			  });
			  
				
			}else{
			 alert("No conexion")	
			}// fin iff conn
			 
			  
			  
			  
			}///fin finction init
  