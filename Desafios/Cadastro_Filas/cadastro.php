<?php
    include ("conexao.php");
    
    $nome= $_POST['nome'];
    $chamada= $_POST['chamada'];
    
    $sql=" INSERT INTO pacientes (nome, chamada); 
    VALUES ('$nome', '$chamada')";
    
    if(mysqli_query($conexao, $sql)){
        echo "Usuário cadastrado com sucesso";
    }
    else{
        echo "erro".mysqli_connect_error($conexao);
    }
    mysqli_close($conexao);

?>