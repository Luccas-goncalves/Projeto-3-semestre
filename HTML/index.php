<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<title>TaskList</title>

		<!-- Bootstrap CSS -->
      	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

		<script src="https://kit.fontawesome.com/c4bf745026.js" crossorigin="anonymous"></script>

		<link rel="stylesheet" type="text/css" href="../CSS/styleCadastro.css">
		<link rel="icon" href="../img/icon.png">
	</head>
	<body>

		<div class="container">
			<div id="lc">
				<a class="loginCadastro" href="index.php">Login</a>
				<a class="loginCadastro" href="cadastro.php" >Cadastro</a>
			</div>

			
				<div id="logo">
					<h1 class="titulo" >TaskList</h1>
				</div>
			<!-- formulário -->
			<form> 

					<div class="single-input">
						<input required class="input" type="text" name="" id="name">
						<label for="name">Nome do usuário</label>
					</div>

					<div class="single-input">

						<input required class="input" type="password" name="" id="password">
						<label for="password">Senha</label>
						<i class="fa-solid fa-eye" id="btnSenha" onclick="showHide()"></i>
						
					</div>

					<a class="esqSenha" href="">ESQUECI MINHA SENHA</a>

					<button class="btn">Entrar</button>
					
			</form><!-- fim formulário -->
	
		</div>

		<script src="../JS/script.js"></script>

	</body>
</html>