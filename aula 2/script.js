function adicionarTarefa() {
      let mensagem = "Tarefa adicionada com sucesso!";
    

      let inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value
       document.getElementById("mensagem").textContent = mensagem


      let inputSegundaTarefa = document.getElementById("inputSegundaTarefa")
      let Segundatarefa = inputSegundaTarefa.value
      document.getElementById("Outramensagem").textContent = Segundatarefa;

      let listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")

      novaTarefa.textContent = tarefa

      listaTarefas.appendChild(novaTarefa)

      input.value = ""
      
    }