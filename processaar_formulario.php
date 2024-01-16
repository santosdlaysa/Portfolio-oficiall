<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletar dados do formulário
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    // Enviar e-mail (exemplo básico)
    $assunto = "Nova mensagem do formulário de contato";
    $corpo = "E-mail: $email\n\nMensagem:\n$mensagem";
    $destinatario = "santosdlaysa@gmail.com";

    // Ajuste os cabeçalhos conforme necessário
    $cabecalhos = "From: $email";

    // Envia o e-mail
    mail($destinatario, $assunto, $corpo, $cabecalhos);

    // Redireciona de volta para a página do formulário
    header("Location: index.html");
    exit();
} else {
    // Se alguém tentar acessar este arquivo diretamente, redirecione para a página inicial
    header("Location: index.html");
    exit();
}
?>
