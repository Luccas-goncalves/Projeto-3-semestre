function showHide() {
	var inputPass = document.getElementById('password')
	var btnShowPass = document.getElementById('btnSenha')

	if(inputPass.type === 'password'){
		inputPass.setAttribute('type','text')
		btnShowPass.classList.replace('fa-eye','fa-eye-slash')
	}else{
		inputPass.setAttribute('type','password')
		btnShowPass.classList.replace('fa-eye-slash','fa-eye')
	}
}