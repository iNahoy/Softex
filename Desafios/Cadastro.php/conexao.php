<?php 
$hostname='localhost';
$usuario='root'; 
$senha='root';
$banco='yohanbd';

$conexao = mysqli_connect($hostname, $usuario, $senha, $banco);

        if(!$conexao) {
        die("Houve um erro para se conectar: ".msqli_connect_error());}
?>