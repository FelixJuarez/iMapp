var cate=45;
var ide=0;
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

function load_cat1() {			
			
			checkConnection();
			
			if(conn=="YES"){
					
				 $.getJSON('http:diarweb.com/respuestacatip.php?cat='+cate,function(data){
					 $('#principal_cat').html(' ');
			//alert("con si");
					for (var i = 0; i < data.length; i++) {
						//if(data[i].cat1 == cate || data[i].cat2 == cate){
							if(data[i].idimapp==52){
								 $('#principal_cat').append(" <a href='#plaza'>	<div class='col-xs-3 ico'><center><img src='img/clientes/"+data[i].idimapp+".png' width='80%' /><p class='texto_cat'>"+data[i].nombre+"</p></center></div></a>");
							}else{				
							  $('#principal_cat').append("<a href='#detallesz'  onClick='javascript:ide="+data[i].idimapp+"'>	<div class='col-xs-3 ico'><center><img src='img/clientes/"+data[i].idimapp+".png' width='80%' /><p class='texto_cat'>"+data[i].nombre+"</p></center></div></a>");
							}
							
					  	//alert("conok");
					//	}
					
					
					}
					
						});
					   
					}
					
				 }





function loadgaleria() {			
			
			checkConnection();
			
			if(conn=="YES"){
					
				 $.getJSON('http:diarweb.com/respuesta2ip.php?ide='+ide,function(data){
			//alert("con si");
			 $('#prifotos').append(" <div class='col-xs-12'> <div onClick='parent.history.back();' style='color:rgba(95,95,95,1.00)'>&laquo; V O L V E R</div> </div>");
					for (var i = 0; i < data.length; i++) {
						
		
						
							//  $('#principal').append("<a href='galeria2.html?cat=http://diarweb.com/imapp/galeria/"+data[i].idimapp+"/"+data[i].imagen+"&id="+data[i].idimapp+"'>	<div class='col-xs-4 ico'><center><img src='http://diarweb.com/imapp/galeria/"+data[i].idimapp+"/"+data[i].imagen+"' width='80%' /></center></div></a>");
							
							 $('#prifotos').append("<div class='col-xs-12 ico'><center><img src='http://diarweb.com/imapp/galeria/"+data[i].idimapp+"/"+data[i].imagen+"' width='100%' /></center></div>");
					  	//alert("conok");
					
					}
					 $('#prifotos').append("<p  style='color:rgba(255,255,255,1.00)'>.<br>.<br>.<br>.<br>.<br>.<br>.<br></p>");
						});
					   
					}
					
				 }






function load_detalle() {			
			
			checkConnection();
			
			if(conn=="YES"){
					
				 $.getJSON('http:diarweb.com/respuestaip.php?ide='+ide,function(data){
			//alert("con si");
					for (var i = 0; i < data.length; i++) {
						if(data[i].idimapp == ide){
							  $('#principal').append(" <div class='col-xs-12'> <div onClick='parent.history.back();' style='color:rgba(95,95,95,1.00)'>&laquo; V O L V E R</div> </div>");
							
							
							  $('#principal').append("<div class='col-xs-12 ico'><center><img src='img/clientes/"+data[i].idimapp+".png' width='20%' /></div><center><div class='col-xs-12 texto_cat' id='txt'>"+data[i].nombre+" </div></center>");
							  $('#principal').append(" <div class='col-xs-9 ico'><br><br><p class='texto_cat'>"+data[i].desc+"</p><br><br><br><br><br></div>");
							  $('#principal').append(" <div class='col-xs-3 dt' id='imgg'><br><br></div>");
							 
							  if(data[i].correo != ""){
								    $('#imgg').append("<div class='col-xs-12 dt'><center><a href='mailto:"+data[i].correo+"' data-rel='external'><img src='img/desc/1.png' width='40%' /></a></center></div>");
							  }
							 
							  if(data[i].tel1 != ""){
							   $('#imgg').append("<div class='col-xs-12 dt'><center><a href='tel://+52"+data[i].tel1+"'><img src='img/desc/2.png' width='40%' /></a></center></div>");
							  }
							  
							  
							   $('#imgg').append("<div class='col-xs-12 dt'><center><a href='#fotos'><img src='img/desc/3.png' width='40%' /></a></center></div>");
							
							
							if(data[i].latitud != ""){
								
							if(so == "Android"){
		 
		 							$('#imgg').append("<div class='col-xs-12 dt'><center><a href='geo:0,0?q="+data[i].latitud+","+data[i].longitud+"("+data[i].nombre+")&z=1'><img src='img/desc/4.png' width='40%' /></a></center></div>");
							}else if(so == "iOS"){
			
									$('#imgg').append("<div class='col-xs-12 dt'><center><a href='http://maps.apple.com/maps?saddr=Current%20Location&daddr="+data[i].latitud+","+data[i].longitud+"'><img src='img/desc/4.png' width='40%' /></a></center></div>");
			
							}
							
							
							   
							}
							
							if(data[i].fb != ""){
							   $('#imgg').append("<div class='col-xs-12 dt'><center><a href='"+data[i].fb+"'><img src='img/desc/5.png' width='40%' /></a></center></div>");
							}
							
							
							 $('#imgg').append("<div class='col-xs-12 dt'><center><p style='color:white;'><br>.<br>.<br>.<br>.<br><br>.<br>.<br>.<br>.<br>.<br>.<br>.<br>.<br></p></center></div>");
							 
					  	//alert("conok");
						}
					}
						});
					   
					}
					
				 }