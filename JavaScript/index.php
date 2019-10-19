
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="style.css">

        <script src="model.js"></script>

    </head>
    <body>

    <div class="centralizaForm">
    <form id='formulario' name="form" method="post" action="">

        <label id='erro' class="none">CPF inválido</label>

        <label id='certo' class="none">CPF válido</label>

        <label id='insira' class="none">Insira o CPF</label>
        <br>
        Insira seu CPF : <input name='cpf'  type="text" onkeydown="fMasc(this , mCPF)" >

        <input type="button" value="enviar"  onclick="return verificaCPF()">

    </form>
    </div>
    </body>
</html>