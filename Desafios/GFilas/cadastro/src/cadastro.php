<?php
    include ("conexao.php");
    
    $nome= $_POST['nome'];
    
    $sql="INSERT INTO cadastro (nome) VALUES ('$nome')";

    if(mysqli_query($conexao, $sql)){
        echo "Cadastrado com sucesso";
    }
    else{
        echo "Erro".mysqli_connect_error();
    }

    mysqli_close($conexao);
    
?>