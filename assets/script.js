//variaveis
const inputTask = document.querySelector(".input-task")
const btnTask = document.querySelector(".btn-task")
// const listTask = document.querySelector(".list-task")


//adicionar as tarefas
document.querySelector(".btn-task").onclick = function() {
    if(document.querySelector(".inputs input").value.length == 0){
        alert("Você não pode adicionar uma tarefa vazia. Adicione um texto...")
    }
    else{
        document.querySelector(".list-task").innerHTML += 
        `
        <div id="tasks" class=" ">
            <li class="task-item"> <i class="task fa-regular fa-circle"></i>
                ${document.querySelector(".input-task").value} 
                <i class="fa-solid fa-x delete"></i></li>
        </div>
        `
        
        // remover tarefas
        const current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // completed task
        document.querySelector(".task-item").onclick = function() {
            this.classList.toggle('completed');
        }
    }
}

// adicionar tarefa com clique no enter
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector(".btn-task");
      
      btn.click();
    
    }
  });