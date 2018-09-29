<?php 
$destino ="kevinreve096@gmail.com";
$nombre = $_POST["nombre"];
$mail =$_POST["mail"];
$tel = $_POST["tel"];
$mensaje = $_POST["mensaje"];
$asunto= "Sofit contacto";
$contenido = "nombre: ".$nombre."\nmail: ".$mail."\ntelefono: ".$tel."\nmensaje: \n".$mensaje;
$header="from :".$mail;
mail($destino,$asunto,$contenido,$header);


 ?>