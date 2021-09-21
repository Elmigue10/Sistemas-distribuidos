<?php
require_once 'lib/nusoap.php';
$wsdl = "https://localhost:44319/WebService1.asmx?WSDL";
$cliente = new nusoap_client($wsdl,true);
$resultado = $cliente->call(listar);
$columnas = ceil(count($resultado,1)/count($resultado,0))-1;

    include 'vista/alumno.php';

?>