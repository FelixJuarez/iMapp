<?php
//Generar Respuesta JSON con PHP y MySQL
//Generamos la conexion

$host = "67.227.236.24";
$usuario = "diarwebc_admin";
$pass = "Felix010394";
$db = "diarwebc_imapp";

$servidor = mysql_connect($host, $usuario, $pass);
mysql_set_charset("utf8",$servidor);
$conexion = mysql_select_db($db, $servidor);

//se establece la consulta
$consulta = "SELECT * FROM users";
$sql = mysql_query($consulta);

if( ! $sql ){
	echo "La conexion no se logro".mysql_error();
	die;
		
}

//se declara un arreglo
$datos=array();
while($obj = mysql_fetch_object($sql)){
	$datos[] = array('id' => $obj->id,
						'idimapp' => $obj->idimapp,	
						'nombre' => $obj->nombre,
						'correo' => $obj->correo,
						'tel1' => $obj->tel1,
						'tel2' => $obj->tel2,
						'desc' => $obj->desc,
						'direccion' => $obj->direccion,
						'web' => $obj->web,
			);
}
	
echo '' . json_encode($datos) . '';

mysql_close($servidor);//cerramos la conexion

header('Content-type: application/json');//aplicacion tipo json

header('Access-Control-Allow-Origin');//Se abre el acceso a las conexiones que requieran de esta aplicacion




?>