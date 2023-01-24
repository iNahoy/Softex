<?php 

$hostname='localhost';
$usuario='root'; 
$senha='root';
$banco='filas';

$conexao = mysqli_connect($hostname, $usuario, $senha, $banco);

if (!$conexao) {
    die("Houve um erro na conexão: ".mysqli_connect_error());
}

?>