var conn;
//	var existe_db1
	var db
var vall="";

  function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		
    	
	}

    // device APIs are available
    //
    function onDeviceReady() {
		alert("Si funciona");
		    
		existe_db = window.localStorage.getItem("existe_db1");
			db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
			//if(existe_db1 == null){
				creaDB();
			//}else{
			//	cargaDatos();
			//}
		
    }
	

	

 

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
					var weee;
					//	for (var i = 0; i < data.length; i++) {
							
							//	vall='INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web) VALUES ("'+data[i].idimapp+'","'+data[i].nombre+'","'+data[i].correo+'","'+data[i].tel1+'","'+data[i].tel2+'","'+data[i].desc+'","'+data[i].direccion+'","'+data[i].web+'")';
						//	}
							
							
								db.transaction(
    function (transaction) {
		
        transaction.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web) VALUES ("'+data[0].idimapp+'","'+data[0].nombre+'","'+data[0].correo+'","'+data[0].tel1+'","'+data[0].tel2+'","'+data[0].desc+'","'+data[0].direccion+'","'+data[0].web+'")');
		
		transaction.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web) VALUES ("'+data[1].idimapp+'","'+data[1].nombre+'","'+data[1].correo+'","'+data[1].tel1+'","'+data[1].tel2+'","'+data[1].desc+'","'+data[1].direccion+'","'+data[1].web+'")');
		
		transaction.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web) VALUES ("'+data[3].idimapp+'","'+data[3].nombre+'","'+data[3].correo+'","'+data[3].tel1+'","'+data[3].tel2+'","'+data[3].desc+'","'+data[3].direccion+'","'+data[3].web+'")');
		
		
	
		 
    }
);
						
												
			
			  
			  });
			  
				
			}else{
			 alert("No conexion")	
			}// fin iff conn
			 
			  
			  
			  
			}///fin finction init
			
			
			function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	
}

function creaNuevaDB(tx){
	alert("Creando base de datos");
	
	tx.executeSql('DROP TABLE IF EXISTS usuarios');
	
	var sql = "CREATE TABLE IF NOT EXISTS usuarios ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"idimapp VARCHAR(50), " +
		"nombre VARCHAR(50), " +
		"correo VARCHAR(30), " +
		"tel1 VARCHAR(30), " +
		"tel2 VARCHAR(200), " + 
		"desc VARCHAR(200), " + 
		"direccion VARCHAR(200), " + 
		"web VARCHAR(30) )";
		
	tx.executeSql(sql);
	init();    
	//tx.executeSql("INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web) VALUES ('s','s','s','s','s','s','s','s')");	
	//tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (1,'José','Pérez','+34566222666','amigo','','paco@paco.com')");
	//tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (2,'Siro','González','+34555434567','familia','','siro@test.com')");
	//tx.executeSql("INSERT INTO agenda_curso (id,nombre,apellidos,telefono,categoria,foto,email) VALUES (3,'Julio','Rodríguez','+34756222666','trabajo','','julio@test.com')");
	
}

function agregar(){
	db.transaction(agregarusr,errorDB,cargaDatos);
}

function agregarusr(tx){
	tx.executeSql("INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web) VALUES ("+vall+")");
}

function creaSuccess(){
//	window.localStorage.setItem("existe_db1", 1);
	cargaDatos();
}

function errorDB(err){
	alert("Error procesando SQL " + err.code);
	
}




/* 
* carga de datos desde la base de datos
*/
function cargaDatos(){
	db.transaction(cargaRegistros, errorDB);
}

function cargaRegistros(tx){
	alert("Cargando registros de la base de datos");
	tx.executeSql('SELECT * FROM usuarios', [], cargaDatosSuccess, errorDB);
}

function cargaDatosSuccess(tx, results){
	alert("Recibidos de la DB " + results.rows.length + " registros");
	if(results.rows.length == 0){
		alert("No se han recibido registros");
		
	}
	
	for(var i=0; i<results.rows.length; i++){
		var persona = results.rows.item(i);
		var selector = $("#lista_" + persona.categoria + " ul");
		var foto = persona.foto;
		alert(persona.nombre);
	}
	
	
}

