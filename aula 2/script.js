function adicionarTarefa() {
      let mensagem = "Tarefa adicionada com sucesso!";
    

      //recebe o valor do input do usuário
      let inputTarefa = document.getElementById("inputTarefa")
      let tarefa = inputTarefa.value



       document.getElementById("mensagem").textContent = mensagem


       //cria outra tarefa
      let inputSegundaTarefa = document.getElementById("inputSegundaTarefa")
      let Segundatarefa = inputSegundaTarefa.value
      document.getElementById("Outramensagem").textContent = Segundatarefa;

      //cria lista(li) e coloca na lista(ul)
      let listaTarefas = document.getElementById("listaTarefas")
      let novaTarefa = document.createElement("li")

      novaTarefa.textContent = tarefa

      listaTarefas.appendChild(novaTarefa)

      input.value = ""

      //se o valor do input for vazio então mostre uma mensagem de erro para o usuário

      //no javascript coloca a condição entre parênteses
      if (tarefa = "") {

        

      }
      
    }