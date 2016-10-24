var conn;
	var existe_db;
	var db;
var vall="";
var pagina="mapa.html";

//setTimeout ("redireccionar()", 1);
function redireccionar() 
{
location.href=pagina;
} 

  function onLoada() {
        document.addEventListener("deviceready", onDeviceReady, false);
		
    	
	}

    // device APIs are available
    //
    function onDeviceReady() {
		//alert("Si funciona");
		    
		existe_db = window.localStorage.getItem("existe_db");
			db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
			
			if(existe_db == null){
				//creaDB();
			
			}else{
			cargaDatos();
			}
			checkConnection();
			setTimeout ("redireccionar()", 500);
		
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
		creaDB();
	}else{
		conn="NO";
	}
}



		 	function init() {			
			
		
			
			if(conn == "YES"){
				//	creaDB();
				 $.getJSON('http:diarweb.com/respuesta.php',function(data){
		
								db.transaction(
    function (tx) {
//////////


tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[70].idimapp+'","'+data[70].nombre+'","'+data[70].correo+'","'+data[70].tel1+'","'+data[70].tel2+'","'+data[70].desc+'","'+data[70].direccion+'","'+data[70].web+'","'+data[70].cat1+'","'+data[70].cat2+'","'+data[70].latitud+'","'+data[70].longitud+'","'+data[70].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[71].idimapp+'","'+data[71].nombre+'","'+data[71].correo+'","'+data[71].tel1+'","'+data[71].tel2+'","'+data[71].desc+'","'+data[71].direccion+'","'+data[71].web+'","'+data[71].cat1+'","'+data[71].cat2+'","'+data[71].latitud+'","'+data[71].longitud+'","'+data[71].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[72].idimapp+'","'+data[72].nombre+'","'+data[72].correo+'","'+data[72].tel1+'","'+data[72].tel2+'","'+data[72].desc+'","'+data[72].direccion+'","'+data[72].web+'","'+data[72].cat1+'","'+data[72].cat2+'","'+data[72].latitud+'","'+data[72].longitud+'","'+data[72].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[73].idimapp+'","'+data[73].nombre+'","'+data[73].correo+'","'+data[73].tel1+'","'+data[73].tel2+'","'+data[73].desc+'","'+data[73].direccion+'","'+data[73].web+'","'+data[73].cat1+'","'+data[73].cat2+'","'+data[73].latitud+'","'+data[73].longitud+'","'+data[73].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[74].idimapp+'","'+data[74].nombre+'","'+data[74].correo+'","'+data[74].tel1+'","'+data[74].tel2+'","'+data[74].desc+'","'+data[74].direccion+'","'+data[74].web+'","'+data[74].cat1+'","'+data[74].cat2+'","'+data[74].latitud+'","'+data[74].longitud+'","'+data[74].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[75].idimapp+'","'+data[75].nombre+'","'+data[75].correo+'","'+data[75].tel1+'","'+data[75].tel2+'","'+data[75].desc+'","'+data[75].direccion+'","'+data[75].web+'","'+data[75].cat1+'","'+data[75].cat2+'","'+data[75].latitud+'","'+data[75].longitud+'","'+data[75].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[76].idimapp+'","'+data[76].nombre+'","'+data[76].correo+'","'+data[76].tel1+'","'+data[76].tel2+'","'+data[76].desc+'","'+data[76].direccion+'","'+data[76].web+'","'+data[76].cat1+'","'+data[76].cat2+'","'+data[76].latitud+'","'+data[76].longitud+'","'+data[76].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[77].idimapp+'","'+data[77].nombre+'","'+data[77].correo+'","'+data[77].tel1+'","'+data[77].tel2+'","'+data[77].desc+'","'+data[77].direccion+'","'+data[77].web+'","'+data[77].cat1+'","'+data[77].cat2+'","'+data[77].latitud+'","'+data[77].longitud+'","'+data[77].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[78].idimapp+'","'+data[78].nombre+'","'+data[78].correo+'","'+data[78].tel1+'","'+data[78].tel2+'","'+data[78].desc+'","'+data[78].direccion+'","'+data[78].web+'","'+data[78].cat1+'","'+data[78].cat2+'","'+data[78].latitud+'","'+data[78].longitud+'","'+data[78].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data[79].idimapp+'","'+data[79].nombre+'","'+data[79].correo+'","'+data[79].tel1+'","'+data[79].tel2+'","'+data[79].desc+'","'+data[79].direccion+'","'+data[79].web+'","'+data[79].cat1+'","'+data[79].cat2+'","'+data[79].latitud+'","'+data[79].longitud+'","'+data[79].fb+'")');


    }
);
		
						
												
			
			  
		  });
			  
				
				
				
				
				
						 $.getJSON('http:diarweb.com/respuesta.php',function(data1){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[60].idimapp+'","'+data1[60].nombre+'","'+data1[60].correo+'","'+data1[60].tel1+'","'+data1[60].tel2+'","'+data1[60].desc+'","'+data1[60].direccion+'","'+data1[60].web+'","'+data1[60].cat1+'","'+data1[60].cat2+'","'+data1[60].latitud+'","'+data1[60].longitud+'","'+data1[60].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[61].idimapp+'","'+data1[61].nombre+'","'+data1[61].correo+'","'+data1[61].tel1+'","'+data1[61].tel2+'","'+data1[61].desc+'","'+data1[61].direccion+'","'+data1[61].web+'","'+data1[61].cat1+'","'+data1[61].cat2+'","'+data1[61].latitud+'","'+data1[61].longitud+'","'+data1[61].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[62].idimapp+'","'+data1[62].nombre+'","'+data1[62].correo+'","'+data1[62].tel1+'","'+data1[62].tel2+'","'+data1[62].desc+'","'+data1[62].direccion+'","'+data1[62].web+'","'+data1[62].cat1+'","'+data1[62].cat2+'","'+data1[62].latitud+'","'+data1[62].longitud+'","'+data1[62].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[63].idimapp+'","'+data1[63].nombre+'","'+data1[63].correo+'","'+data1[63].tel1+'","'+data1[63].tel2+'","'+data1[63].desc+'","'+data1[63].direccion+'","'+data1[63].web+'","'+data1[63].cat1+'","'+data1[63].cat2+'","'+data1[63].latitud+'","'+data1[63].longitud+'","'+data1[63].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[64].idimapp+'","'+data1[64].nombre+'","'+data1[64].correo+'","'+data1[64].tel1+'","'+data1[64].tel2+'","'+data1[64].desc+'","'+data1[64].direccion+'","'+data1[64].web+'","'+data1[64].cat1+'","'+data1[64].cat2+'","'+data1[64].latitud+'","'+data1[64].longitud+'","'+data1[64].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[65].idimapp+'","'+data1[65].nombre+'","'+data1[65].correo+'","'+data1[65].tel1+'","'+data1[65].tel2+'","'+data1[65].desc+'","'+data1[65].direccion+'","'+data1[65].web+'","'+data1[65].cat1+'","'+data1[65].cat2+'","'+data1[65].latitud+'","'+data1[65].longitud+'","'+data1[65].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[66].idimapp+'","'+data1[66].nombre+'","'+data1[66].correo+'","'+data1[66].tel1+'","'+data1[66].tel2+'","'+data1[66].desc+'","'+data1[66].direccion+'","'+data1[66].web+'","'+data1[66].cat1+'","'+data1[66].cat2+'","'+data1[66].latitud+'","'+data1[66].longitud+'","'+data1[66].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[67].idimapp+'","'+data1[67].nombre+'","'+data1[67].correo+'","'+data1[67].tel1+'","'+data1[67].tel2+'","'+data1[67].desc+'","'+data1[67].direccion+'","'+data1[67].web+'","'+data1[67].cat1+'","'+data1[67].cat2+'","'+data1[67].latitud+'","'+data1[67].longitud+'","'+data1[67].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[68].idimapp+'","'+data1[68].nombre+'","'+data1[68].correo+'","'+data1[68].tel1+'","'+data1[68].tel2+'","'+data1[68].desc+'","'+data1[68].direccion+'","'+data1[68].web+'","'+data1[68].cat1+'","'+data1[68].cat2+'","'+data1[68].latitud+'","'+data1[68].longitud+'","'+data1[68].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data1[69].idimapp+'","'+data1[69].nombre+'","'+data1[69].correo+'","'+data1[69].tel1+'","'+data1[69].tel2+'","'+data1[69].desc+'","'+data1[69].direccion+'","'+data1[69].web+'","'+data1[69].cat1+'","'+data1[69].cat2+'","'+data1[69].latitud+'","'+data1[69].longitud+'","'+data1[69].fb+'")');



    }
);
		
						
												
			
			  
		  });
			  
				
				
				
								
						 $.getJSON('http:diarweb.com/respuesta.php',function(data2){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[50].idimapp+'","'+data2[50].nombre+'","'+data2[50].correo+'","'+data2[50].tel1+'","'+data2[50].tel2+'","'+data2[50].desc+'","'+data2[50].direccion+'","'+data2[50].web+'","'+data2[50].cat1+'","'+data2[50].cat2+'","'+data2[50].latitud+'","'+data2[50].longitud+'","'+data2[50].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[51].idimapp+'","'+data2[51].nombre+'","'+data2[51].correo+'","'+data2[51].tel1+'","'+data2[51].tel2+'","'+data2[51].desc+'","'+data2[51].direccion+'","'+data2[51].web+'","'+data2[51].cat1+'","'+data2[51].cat2+'","'+data2[51].latitud+'","'+data2[51].longitud+'","'+data2[51].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[52].idimapp+'","'+data2[52].nombre+'","'+data2[52].correo+'","'+data2[52].tel1+'","'+data2[52].tel2+'","'+data2[52].desc+'","'+data2[52].direccion+'","'+data2[52].web+'","'+data2[52].cat1+'","'+data2[52].cat2+'","'+data2[52].latitud+'","'+data2[52].longitud+'","'+data2[52].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[53].idimapp+'","'+data2[53].nombre+'","'+data2[53].correo+'","'+data2[53].tel1+'","'+data2[53].tel2+'","'+data2[53].desc+'","'+data2[53].direccion+'","'+data2[53].web+'","'+data2[53].cat1+'","'+data2[53].cat2+'","'+data2[53].latitud+'","'+data2[53].longitud+'","'+data2[53].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[54].idimapp+'","'+data2[54].nombre+'","'+data2[54].correo+'","'+data2[54].tel1+'","'+data2[54].tel2+'","'+data2[54].desc+'","'+data2[54].direccion+'","'+data2[54].web+'","'+data2[54].cat1+'","'+data2[54].cat2+'","'+data2[54].latitud+'","'+data2[54].longitud+'","'+data2[54].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[55].idimapp+'","'+data2[55].nombre+'","'+data2[55].correo+'","'+data2[55].tel1+'","'+data2[55].tel2+'","'+data2[55].desc+'","'+data2[55].direccion+'","'+data2[55].web+'","'+data2[55].cat1+'","'+data2[55].cat2+'","'+data2[55].latitud+'","'+data2[55].longitud+'","'+data2[55].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[56].idimapp+'","'+data2[56].nombre+'","'+data2[56].correo+'","'+data2[56].tel1+'","'+data2[56].tel2+'","'+data2[56].desc+'","'+data2[56].direccion+'","'+data2[56].web+'","'+data2[56].cat1+'","'+data2[56].cat2+'","'+data2[56].latitud+'","'+data2[56].longitud+'","'+data2[56].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[57].idimapp+'","'+data2[57].nombre+'","'+data2[57].correo+'","'+data2[57].tel1+'","'+data2[57].tel2+'","'+data2[57].desc+'","'+data2[57].direccion+'","'+data2[57].web+'","'+data2[57].cat1+'","'+data2[57].cat2+'","'+data2[57].latitud+'","'+data2[57].longitud+'","'+data2[57].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[58].idimapp+'","'+data2[58].nombre+'","'+data2[58].correo+'","'+data2[58].tel1+'","'+data2[58].tel2+'","'+data2[58].desc+'","'+data2[58].direccion+'","'+data2[58].web+'","'+data2[58].cat1+'","'+data2[58].cat2+'","'+data2[58].latitud+'","'+data2[58].longitud+'","'+data2[58].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data2[59].idimapp+'","'+data2[59].nombre+'","'+data2[59].correo+'","'+data2[59].tel1+'","'+data2[59].tel2+'","'+data2[59].desc+'","'+data2[59].direccion+'","'+data2[59].web+'","'+data2[59].cat1+'","'+data2[59].cat2+'","'+data2[59].latitud+'","'+data2[59].longitud+'","'+data2[59].fb+'")');



    }
);
		
						
												
			
			  
		  });
			  
				
				
				
				
				
								
						 $.getJSON('http:diarweb.com/respuesta.php',function(data3){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[40].idimapp+'","'+data3[40].nombre+'","'+data3[40].correo+'","'+data3[40].tel1+'","'+data3[40].tel2+'","'+data3[40].desc+'","'+data3[40].direccion+'","'+data3[40].web+'","'+data3[40].cat1+'","'+data3[40].cat2+'","'+data3[40].latitud+'","'+data3[40].longitud+'","'+data3[40].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[41].idimapp+'","'+data3[41].nombre+'","'+data3[41].correo+'","'+data3[41].tel1+'","'+data3[41].tel2+'","'+data3[41].desc+'","'+data3[41].direccion+'","'+data3[41].web+'","'+data3[41].cat1+'","'+data3[41].cat2+'","'+data3[41].latitud+'","'+data3[41].longitud+'","'+data3[41].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[42].idimapp+'","'+data3[42].nombre+'","'+data3[42].correo+'","'+data3[42].tel1+'","'+data3[42].tel2+'","'+data3[42].desc+'","'+data3[42].direccion+'","'+data3[42].web+'","'+data3[42].cat1+'","'+data3[42].cat2+'","'+data3[42].latitud+'","'+data3[42].longitud+'","'+data3[42].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[43].idimapp+'","'+data3[43].nombre+'","'+data3[43].correo+'","'+data3[43].tel1+'","'+data3[43].tel2+'","'+data3[43].desc+'","'+data3[43].direccion+'","'+data3[43].web+'","'+data3[43].cat1+'","'+data3[43].cat2+'","'+data3[43].latitud+'","'+data3[43].longitud+'","'+data3[43].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[44].idimapp+'","'+data3[44].nombre+'","'+data3[44].correo+'","'+data3[44].tel1+'","'+data3[44].tel2+'","'+data3[44].desc+'","'+data3[44].direccion+'","'+data3[44].web+'","'+data3[44].cat1+'","'+data3[44].cat2+'","'+data3[44].latitud+'","'+data3[44].longitud+'","'+data3[44].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[45].idimapp+'","'+data3[45].nombre+'","'+data3[45].correo+'","'+data3[45].tel1+'","'+data3[45].tel2+'","'+data3[45].desc+'","'+data3[45].direccion+'","'+data3[45].web+'","'+data3[45].cat1+'","'+data3[45].cat2+'","'+data3[45].latitud+'","'+data3[45].longitud+'","'+data3[45].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[46].idimapp+'","'+data3[46].nombre+'","'+data3[46].correo+'","'+data3[46].tel1+'","'+data3[46].tel2+'","'+data3[46].desc+'","'+data3[46].direccion+'","'+data3[46].web+'","'+data3[46].cat1+'","'+data3[46].cat2+'","'+data3[46].latitud+'","'+data3[46].longitud+'","'+data3[46].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[47].idimapp+'","'+data3[47].nombre+'","'+data3[47].correo+'","'+data3[47].tel1+'","'+data3[47].tel2+'","'+data3[47].desc+'","'+data3[47].direccion+'","'+data3[47].web+'","'+data3[47].cat1+'","'+data3[47].cat2+'","'+data3[47].latitud+'","'+data3[47].longitud+'","'+data3[47].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[48].idimapp+'","'+data3[48].nombre+'","'+data3[48].correo+'","'+data3[48].tel1+'","'+data3[48].tel2+'","'+data3[48].desc+'","'+data3[48].direccion+'","'+data3[48].web+'","'+data3[48].cat1+'","'+data3[48].cat2+'","'+data3[48].latitud+'","'+data3[48].longitud+'","'+data3[48].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data3[49].idimapp+'","'+data3[49].nombre+'","'+data3[49].correo+'","'+data3[49].tel1+'","'+data3[49].tel2+'","'+data3[49].desc+'","'+data3[49].direccion+'","'+data3[49].web+'","'+data3[49].cat1+'","'+data3[49].cat2+'","'+data3[49].latitud+'","'+data3[49].longitud+'","'+data3[49].fb+'")');



    }
);
		
						
												
			
			  
		  });
			  
				
				
				
				
				
							
								
						 $.getJSON('http:diarweb.com/respuesta.php',function(data4){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[30].idimapp+'","'+data4[30].nombre+'","'+data4[30].correo+'","'+data4[30].tel1+'","'+data4[30].tel2+'","'+data4[30].desc+'","'+data4[30].direccion+'","'+data4[30].web+'","'+data4[30].cat1+'","'+data4[30].cat2+'","'+data4[30].latitud+'","'+data4[30].longitud+'","'+data4[30].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[31].idimapp+'","'+data4[31].nombre+'","'+data4[31].correo+'","'+data4[31].tel1+'","'+data4[31].tel2+'","'+data4[31].desc+'","'+data4[31].direccion+'","'+data4[31].web+'","'+data4[31].cat1+'","'+data4[31].cat2+'","'+data4[31].latitud+'","'+data4[31].longitud+'","'+data4[31].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[32].idimapp+'","'+data4[32].nombre+'","'+data4[32].correo+'","'+data4[32].tel1+'","'+data4[32].tel2+'","'+data4[32].desc+'","'+data4[32].direccion+'","'+data4[32].web+'","'+data4[32].cat1+'","'+data4[32].cat2+'","'+data4[32].latitud+'","'+data4[32].longitud+'","'+data4[32].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[33].idimapp+'","'+data4[33].nombre+'","'+data4[33].correo+'","'+data4[33].tel1+'","'+data4[33].tel2+'","'+data4[33].desc+'","'+data4[33].direccion+'","'+data4[33].web+'","'+data4[33].cat1+'","'+data4[33].cat2+'","'+data4[33].latitud+'","'+data4[33].longitud+'","'+data4[33].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[34].idimapp+'","'+data4[34].nombre+'","'+data4[34].correo+'","'+data4[34].tel1+'","'+data4[34].tel2+'","'+data4[34].desc+'","'+data4[34].direccion+'","'+data4[34].web+'","'+data4[34].cat1+'","'+data4[34].cat2+'","'+data4[34].latitud+'","'+data4[34].longitud+'","'+data4[34].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[35].idimapp+'","'+data4[35].nombre+'","'+data4[35].correo+'","'+data4[35].tel1+'","'+data4[35].tel2+'","'+data4[35].desc+'","'+data4[35].direccion+'","'+data4[35].web+'","'+data4[35].cat1+'","'+data4[35].cat2+'","'+data4[35].latitud+'","'+data4[35].longitud+'","'+data4[35].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[36].idimapp+'","'+data4[36].nombre+'","'+data4[36].correo+'","'+data4[36].tel1+'","'+data4[36].tel2+'","'+data4[36].desc+'","'+data4[36].direccion+'","'+data4[36].web+'","'+data4[36].cat1+'","'+data4[36].cat2+'","'+data4[36].latitud+'","'+data4[36].longitud+'","'+data4[36].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[37].idimapp+'","'+data4[37].nombre+'","'+data4[37].correo+'","'+data4[37].tel1+'","'+data4[37].tel2+'","'+data4[37].desc+'","'+data4[37].direccion+'","'+data4[37].web+'","'+data4[37].cat1+'","'+data4[37].cat2+'","'+data4[37].latitud+'","'+data4[37].longitud+'","'+data4[37].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[38].idimapp+'","'+data4[38].nombre+'","'+data4[38].correo+'","'+data4[38].tel1+'","'+data4[38].tel2+'","'+data4[38].desc+'","'+data4[38].direccion+'","'+data4[38].web+'","'+data4[38].cat1+'","'+data4[38].cat2+'","'+data4[38].latitud+'","'+data4[38].longitud+'","'+data4[38].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data4[39].idimapp+'","'+data4[39].nombre+'","'+data4[39].correo+'","'+data4[39].tel1+'","'+data4[39].tel2+'","'+data4[39].desc+'","'+data4[39].direccion+'","'+data4[39].web+'","'+data4[39].cat1+'","'+data4[39].cat2+'","'+data4[39].latitud+'","'+data4[39].longitud+'","'+data4[39].fb+'")');



    }
);
		
						
												
			
			  
		  });
			  
				
				
				
				 $.getJSON('http:diarweb.com/respuesta.php',function(data5){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////
tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[20].idimapp+'","'+data5[20].nombre+'","'+data5[20].correo+'","'+data5[20].tel1+'","'+data5[20].tel2+'","'+data5[20].desc+'","'+data5[20].direccion+'","'+data5[20].web+'","'+data5[20].cat1+'","'+data5[20].cat2+'","'+data5[20].latitud+'","'+data5[20].longitud+'","'+data5[20].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[21].idimapp+'","'+data5[21].nombre+'","'+data5[21].correo+'","'+data5[21].tel1+'","'+data5[21].tel2+'","'+data5[21].desc+'","'+data5[21].direccion+'","'+data5[21].web+'","'+data5[21].cat1+'","'+data5[21].cat2+'","'+data5[21].latitud+'","'+data5[21].longitud+'","'+data5[21].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[22].idimapp+'","'+data5[22].nombre+'","'+data5[22].correo+'","'+data5[22].tel1+'","'+data5[22].tel2+'","'+data5[22].desc+'","'+data5[22].direccion+'","'+data5[22].web+'","'+data5[22].cat1+'","'+data5[22].cat2+'","'+data5[22].latitud+'","'+data5[22].longitud+'","'+data5[22].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[23].idimapp+'","'+data5[23].nombre+'","'+data5[23].correo+'","'+data5[23].tel1+'","'+data5[23].tel2+'","'+data5[23].desc+'","'+data5[23].direccion+'","'+data5[23].web+'","'+data5[23].cat1+'","'+data5[23].cat2+'","'+data5[23].latitud+'","'+data5[23].longitud+'","'+data5[23].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[24].idimapp+'","'+data5[24].nombre+'","'+data5[24].correo+'","'+data5[24].tel1+'","'+data5[24].tel2+'","'+data5[24].desc+'","'+data5[24].direccion+'","'+data5[24].web+'","'+data5[24].cat1+'","'+data5[24].cat2+'","'+data5[24].latitud+'","'+data5[24].longitud+'","'+data5[24].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[25].idimapp+'","'+data5[25].nombre+'","'+data5[25].correo+'","'+data5[25].tel1+'","'+data5[25].tel2+'","'+data5[25].desc+'","'+data5[25].direccion+'","'+data5[25].web+'","'+data5[25].cat1+'","'+data5[25].cat2+'","'+data5[25].latitud+'","'+data5[25].longitud+'","'+data5[25].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[26].idimapp+'","'+data5[26].nombre+'","'+data5[26].correo+'","'+data5[26].tel1+'","'+data5[26].tel2+'","'+data5[26].desc+'","'+data5[26].direccion+'","'+data5[26].web+'","'+data5[26].cat1+'","'+data5[26].cat2+'","'+data5[26].latitud+'","'+data5[26].longitud+'","'+data5[26].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[27].idimapp+'","'+data5[27].nombre+'","'+data5[27].correo+'","'+data5[27].tel1+'","'+data5[27].tel2+'","'+data5[27].desc+'","'+data5[27].direccion+'","'+data5[27].web+'","'+data5[27].cat1+'","'+data5[27].cat2+'","'+data5[27].latitud+'","'+data5[27].longitud+'","'+data5[27].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[28].idimapp+'","'+data5[28].nombre+'","'+data5[28].correo+'","'+data5[28].tel1+'","'+data5[28].tel2+'","'+data5[28].desc+'","'+data5[28].direccion+'","'+data5[28].web+'","'+data5[28].cat1+'","'+data5[28].cat2+'","'+data5[28].latitud+'","'+data5[28].longitud+'","'+data5[28].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data5[29].idimapp+'","'+data5[29].nombre+'","'+data5[29].correo+'","'+data5[29].tel1+'","'+data5[29].tel2+'","'+data5[29].desc+'","'+data5[29].direccion+'","'+data5[29].web+'","'+data5[29].cat1+'","'+data5[29].cat2+'","'+data5[29].latitud+'","'+data5[29].longitud+'","'+data5[29].fb+'")');



    }
);
		
						
												
			
			  
		  });
			  
			  
			  		
				 $.getJSON('http:diarweb.com/respuesta.php',function(data6){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////
tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[10].idimapp+'","'+data6[10].nombre+'","'+data6[10].correo+'","'+data6[10].tel1+'","'+data6[10].tel2+'","'+data6[10].desc+'","'+data6[10].direccion+'","'+data6[10].web+'","'+data6[10].cat1+'","'+data6[10].cat2+'","'+data6[10].latitud+'","'+data6[10].longitud+'","'+data6[10].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[11].idimapp+'","'+data6[11].nombre+'","'+data6[11].correo+'","'+data6[11].tel1+'","'+data6[11].tel2+'","'+data6[11].desc+'","'+data6[11].direccion+'","'+data6[11].web+'","'+data6[11].cat1+'","'+data6[11].cat2+'","'+data6[11].latitud+'","'+data6[11].longitud+'","'+data6[11].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[12].idimapp+'","'+data6[12].nombre+'","'+data6[12].correo+'","'+data6[12].tel1+'","'+data6[12].tel2+'","'+data6[12].desc+'","'+data6[12].direccion+'","'+data6[12].web+'","'+data6[12].cat1+'","'+data6[12].cat2+'","'+data6[12].latitud+'","'+data6[12].longitud+'","'+data6[12].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[13].idimapp+'","'+data6[13].nombre+'","'+data6[13].correo+'","'+data6[13].tel1+'","'+data6[13].tel2+'","'+data6[13].desc+'","'+data6[13].direccion+'","'+data6[13].web+'","'+data6[13].cat1+'","'+data6[13].cat2+'","'+data6[13].latitud+'","'+data6[13].longitud+'","'+data6[13].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[14].idimapp+'","'+data6[14].nombre+'","'+data6[14].correo+'","'+data6[14].tel1+'","'+data6[14].tel2+'","'+data6[14].desc+'","'+data6[14].direccion+'","'+data6[14].web+'","'+data6[14].cat1+'","'+data6[14].cat2+'","'+data6[14].latitud+'","'+data6[14].longitud+'","'+data6[14].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[15].idimapp+'","'+data6[15].nombre+'","'+data6[15].correo+'","'+data6[15].tel1+'","'+data6[15].tel2+'","'+data6[15].desc+'","'+data6[15].direccion+'","'+data6[15].web+'","'+data6[15].cat1+'","'+data6[15].cat2+'","'+data6[15].latitud+'","'+data6[15].longitud+'","'+data6[15].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[16].idimapp+'","'+data6[16].nombre+'","'+data6[16].correo+'","'+data6[16].tel1+'","'+data6[16].tel2+'","'+data6[16].desc+'","'+data6[16].direccion+'","'+data6[16].web+'","'+data6[16].cat1+'","'+data6[16].cat2+'","'+data6[16].latitud+'","'+data6[16].longitud+'","'+data6[16].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[17].idimapp+'","'+data6[17].nombre+'","'+data6[17].correo+'","'+data6[17].tel1+'","'+data6[17].tel2+'","'+data6[17].desc+'","'+data6[17].direccion+'","'+data6[17].web+'","'+data6[17].cat1+'","'+data6[17].cat2+'","'+data6[17].latitud+'","'+data6[17].longitud+'","'+data6[17].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[18].idimapp+'","'+data6[18].nombre+'","'+data6[18].correo+'","'+data6[18].tel1+'","'+data6[18].tel2+'","'+data6[18].desc+'","'+data6[18].direccion+'","'+data6[18].web+'","'+data6[18].cat1+'","'+data6[18].cat2+'","'+data6[18].latitud+'","'+data6[18].longitud+'","'+data6[18].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data6[19].idimapp+'","'+data6[19].nombre+'","'+data6[19].correo+'","'+data6[19].tel1+'","'+data6[19].tel2+'","'+data6[19].desc+'","'+data6[19].direccion+'","'+data6[19].web+'","'+data6[19].cat1+'","'+data6[19].cat2+'","'+data6[19].latitud+'","'+data6[19].longitud+'","'+data6[19].fb+'")');



    }
);
		
						
												
			
			  
		  });
		  
		  
		  			  		
				 $.getJSON('http:diarweb.com/respuesta.php',function(data7){
		db = window.openDatabase("usuarios", "1.0", "imapp", 200000);
								db.transaction(
    function (tx) {
//////////
tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[0].idimapp+'","'+data7[0].nombre+'","'+data7[0].correo+'","'+data7[0].tel1+'","'+data7[0].tel2+'","'+data7[0].desc+'","'+data7[0].direccion+'","'+data7[0].web+'","'+data7[0].cat1+'","'+data7[0].cat2+'","'+data7[0].latitud+'","'+data7[0].longitud+'","'+data7[0].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[1].idimapp+'","'+data7[1].nombre+'","'+data7[1].correo+'","'+data7[1].tel1+'","'+data7[1].tel2+'","'+data7[1].desc+'","'+data7[1].direccion+'","'+data7[1].web+'","'+data7[1].cat1+'","'+data7[1].cat2+'","'+data7[1].latitud+'","'+data7[1].longitud+'","'+data7[1].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[2].idimapp+'","'+data7[2].nombre+'","'+data7[2].correo+'","'+data7[2].tel1+'","'+data7[2].tel2+'","'+data7[2].desc+'","'+data7[2].direccion+'","'+data7[2].web+'","'+data7[2].cat1+'","'+data7[2].cat2+'","'+data7[2].latitud+'","'+data7[2].longitud+'","'+data7[2].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[3].idimapp+'","'+data7[3].nombre+'","'+data7[3].correo+'","'+data7[3].tel1+'","'+data7[3].tel2+'","'+data7[3].desc+'","'+data7[3].direccion+'","'+data7[3].web+'","'+data7[3].cat1+'","'+data7[3].cat2+'","'+data7[3].latitud+'","'+data7[3].longitud+'","'+data7[3].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[4].idimapp+'","'+data7[4].nombre+'","'+data7[4].correo+'","'+data7[4].tel1+'","'+data7[4].tel2+'","'+data7[4].desc+'","'+data7[4].direccion+'","'+data7[4].web+'","'+data7[4].cat1+'","'+data7[4].cat2+'","'+data7[4].latitud+'","'+data7[4].longitud+'","'+data7[4].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[5].idimapp+'","'+data7[5].nombre+'","'+data7[5].correo+'","'+data7[5].tel1+'","'+data7[5].tel2+'","'+data7[5].desc+'","'+data7[5].direccion+'","'+data7[5].web+'","'+data7[5].cat1+'","'+data7[5].cat2+'","'+data7[5].latitud+'","'+data7[5].longitud+'","'+data7[5].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[6].idimapp+'","'+data7[6].nombre+'","'+data7[6].correo+'","'+data7[6].tel1+'","'+data7[6].tel2+'","'+data7[6].desc+'","'+data7[6].direccion+'","'+data7[6].web+'","'+data7[6].cat1+'","'+data7[6].cat2+'","'+data7[6].latitud+'","'+data7[6].longitud+'","'+data7[6].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[7].idimapp+'","'+data7[7].nombre+'","'+data7[7].correo+'","'+data7[7].tel1+'","'+data7[7].tel2+'","'+data7[7].desc+'","'+data7[7].direccion+'","'+data7[7].web+'","'+data7[7].cat1+'","'+data7[7].cat2+'","'+data7[7].latitud+'","'+data7[7].longitud+'","'+data7[7].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[8].idimapp+'","'+data7[8].nombre+'","'+data7[8].correo+'","'+data7[8].tel1+'","'+data7[8].tel2+'","'+data7[8].desc+'","'+data7[8].direccion+'","'+data7[8].web+'","'+data7[8].cat1+'","'+data7[8].cat2+'","'+data7[8].latitud+'","'+data7[8].longitud+'","'+data7[8].fb+'")');

tx.executeSql('INSERT INTO usuarios (idimapp,nombre,correo,tel1,tel2,desc,direccion,web,cat1,cat2,latitud,longitud,fb) VALUES ("'+data7[9].idimapp+'","'+data7[9].nombre+'","'+data7[9].correo+'","'+data7[9].tel1+'","'+data7[9].tel2+'","'+data7[9].desc+'","'+data7[9].direccion+'","'+data7[9].web+'","'+data7[9].cat1+'","'+data7[9].cat2+'","'+data7[9].latitud+'","'+data7[9].longitud+'","'+data7[9].fb+'")');




    }
);
		
						
												
			
			  
		  });
			  
			  
				
			}else{
			// alert("No conexion")	
			//cargaDatos();
			}// fin iff conn
			 
			  
			  
			  
			}///fin finction init
			
			
			function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	
}

function creaNuevaDB(tx){
	//alert("Creando base de datos");
	
	tx.executeSql('DROP TABLE IF EXISTS usuarios');
	
	var sql = "CREATE TABLE IF NOT EXISTS usuarios ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"idimapp VARCHAR(50), " +
		"nombre VARCHAR(50), " +
		"correo VARCHAR(30), " +
		"tel1 VARCHAR(30), " +
		"tel2 VARCHAR(200), " + 
		"desc text, " + 
		"direccion text, " + 
		"web VARCHAR(100), " + 
		"cat1 VARCHAR(200), " + 
		"cat2 VARCHAR(200), " + 
		"latitud VARCHAR(200), " + 
		"longitud VARCHAR(200), " + 
		"fb VARCHAR(200) )";
		
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
window.localStorage.setItem("existe_db", 1);
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
	//alert("Cargando registros de la base de datos");
	tx.executeSql('SELECT * FROM usuarios', [], cargaDatosSuccess, errorDB);
}

function cargaDatosSuccess(tx, results){
	//alert("Recibidos de la DB " + results.rows.length + " registros");
	if(results.rows.length == 0){
		//alert("No se han recibido registros");
		
	}
	
	for(var i=0; i<results.rows.length; i++){
		var persona = results.rows.item(i);
		
		
	}
	
	
}

