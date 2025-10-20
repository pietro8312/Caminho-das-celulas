<?php

    $dbHost = 'LocalHost';
    $bdUsername = 'root';
    $bdPassword = '';
    $dbName = 'feedback';

    $conexao = new mysqli($dbHost, $dbUsername, $bdPassword, $bdName);

    if($conexao->connect_errno){
        echo "Erro";
    }else{
        echo "Conecxao efetuada";
    }

?>