<?php
    require("conexao.php");
    $id = $_GET['id'];
    $result = mysqli_query($conexao, "SELECT * FROM cadastro WHERE id=$id");
        while($row=mysqli_fetch_array($result)){
        $nome = $row['nome'];
        echo '<br>';
        $ordem = $row['id'];
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?php echo $id; ?></title>
</head>
<body>
    <h1><?php echo $nome; ?> </h1>
    <h2><?php echo $ordem;?> </h2>

    <?php
        $ant=mysqli_query($conexao," SELECT * FROM cadastro WHERE id<$id order by id DESC");
        if($row=mysqli_fetch_array($ant)){
            echo '<a href="show.php?id='.$row['id'].'"><button type="button"> Anterior </button><a>';
        }
        $next=mysqli_query($conexao," SELECT * FROM cadastro WHERE id>$id order by id ASC");
        if($row=mysqli_fetch_array($next)){
            echo '<a href="show.php?id='.$row['id'].'"><button type="button"> Próximo </button><a>';
        }
    ?>

</body>
</html>