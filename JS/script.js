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

//Parte lista de tarefas

const inputTarefa = document.querySelector(".campo-tarefa input"),
filtros = document.querySelectorAll(".filtros span"),
limparTudo = document.querySelector(".limpar-btn"),
caixaTarefas = document.querySelector(".caixa-tarefas");
let editarTarefa,
iseditarTarefa = false,
listas = JSON.parse(localStorage.getItem("lista-tarefa"));
filtros.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.ativo").classList.remove("ativo");
        btn.classList.add("ativo");
        mostrarTarefa(btn.id);
    });
});
function mostrarTarefa(filtro) {
    let liTag = "";
    if(listas) {
        listas.forEach((lista, id) => {
            let completas = lista.status == "completas" ? "checked" : "";
            if(filtro == lista.status || filtro == "todas") {
                liTag += `<li class="tarefa">
                            <label for="${id}">
                                <input onclick="atualizarStatus(this)" type="checkbox" id="${id}" ${completas}>
                                <p class="${completas}">${lista.name}</p>
                            </label>
                            <div class="configuracoes">
                                <i onclick="mostrarMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu-tarefa">
                                    <li onclick='editar(${id}, "${lista.name}")'><i class="uil uil-pen"></i>Editar</li>
                                    <li onclick='apagarTarefa(${id}, "${filtro}")'><i class="uil uil-trash"></i>Remover</li>
                                </ul>
                            </div>
                        </li>`;
            }
        });
    }
    caixaTarefas.innerHTML = liTag || `<span>Você não tem nenhuma tarefa aqui!</span>`;
    let checarTarefa = caixaTarefas.querySelectorAll(".tarefa");
    !checarTarefa.length ? limparTudo.classList.remove("ativo") : limparTudo.classList.add("ativo");
    caixaTarefas.offsetHeight >= 300 ? caixaTarefas.classList.add("overflow") : caixaTarefas.classList.remove("overflow");
}
mostrarTarefa("todas");
function mostrarMenu(tarefaSelecionada) {
    let divMenu = tarefaSelecionada.parentElement.lastElementChild;
    divMenu.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != tarefaSelecionada) {
            divMenu.classList.remove("show");
        }
    });
}
function atualizarStatus(tarefaSelecionada) {
    let nomeTarefa = tarefaSelecionada.parentElement.lastElementChild;
    if(tarefaSelecionada.checked) {
        nomeTarefa.classList.add("checked");
        listas[tarefaSelecionada.id].status = "completas";
    } else {
        nomeTarefa.classList.remove("checked");
        listas[tarefaSelecionada.id].status = "pendentes";
    }
    localStorage.setItem("lista-tarefa", JSON.stringify(listas))
}
function editar(idTarefa, nomeTexto) {
    editarTarefa = idTarefa;
    iseditarTarefa = true;
    inputTarefa.value = nomeTexto;
    inputTarefa.focus();
    inputTarefa.classList.add("ativo");
}
function apagarTarefa(apagarId, filtro) {
    iseditarTarefa = false;
    listas.splice(apagarId, 1);
    localStorage.setItem("lista-tarefa", JSON.stringify(listas));
    mostrarTarefa(filtro);
}
limparTudo.addEventListener("click", () => {
    iseditarTarefa = false;
    listas.splice(0, listas.length);
    localStorage.setItem("lista-tarefa", JSON.stringify(listas));
    mostrarTarefa()
});

const addTarefaBtn = document.querySelector(".add-btn");
addTarefaBtn.addEventListener("click", () => {
    let tarefaUsuario = inputTarefa.value.trim();
    if (tarefaUsuario) {
        if (!iseditarTarefa) {
            listas = !listas ? [] : listas;
            let infoTarefa = { name: tarefaUsuario, status: "pendentes" };
            listas.push(infoTarefa);
        } else {
            iseditarTarefa = false;
            listas[editarTarefa].name = tarefaUsuario;
        }
        inputTarefa.value = "";
        localStorage.setItem("lista-tarefa", JSON.stringify(listas));
        mostrarTarefa(document.querySelector("span.ativo").id);
    }
});

inputTarefa.addEventListener("keyup", e => {
    let tarefaUsuario = inputTarefa.value.trim();
    if(e.key == "Enter" && tarefaUsuario) {
        if(!iseditarTarefa) {
            listas = !listas ? [] : listas;
            let infoTarefa = {name: tarefaUsuario, status: "pendentes"};
            listas.push(infoTarefa);
        } else {
            iseditarTarefa = false;
            listas[editarTarefa].name = tarefaUsuario;
        }
        inputTarefa.value = "";
        localStorage.setItem("lista-tarefa", JSON.stringify(listas));
        mostrarTarefa(document.querySelector("span.ativo").id);
    }
});

