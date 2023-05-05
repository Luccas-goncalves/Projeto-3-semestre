<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">  
    <title>Task List</title>
    
    <link rel="stylesheet" href="../CSS/styleListaTarefas.css">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="icon" href="../img/icon.png">
  </head>
  <body>

    <h1>Task List</h1>
    <div class="conteudo">
      <div class="campo-tarefa">
        <input type="text" placeholder="Adicione uma tarefa">
      </div>
      <div class="menus">
        <div class="filtros">
          <span class="ativo" id="todas">Todas</span>
          <span id="pendentes">Pendentes</span>
          <span id="completas">Completas</span>
        </div>
        <button class="add-btn">Adicionar</button>
        <button class="limpar-btn">Limpar tarefas</button>
      </div>
      <ul class="caixa-tarefas"></ul>
    </div>
    <script src="../JS/script.js"></script>
  </body>
</html>
