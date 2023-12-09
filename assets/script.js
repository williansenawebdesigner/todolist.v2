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
            <li class="task-item"> <i class="fa-regular fa-circle"></i>
                ${document.querySelector(".input-task").value} 
                <i class="fa-solid fa-x delete"></i></li>
           
            
        `

        // remover tarefas
        const current_task = document.querySelectorAll(".delete");
        for(const i=0; i<current_task.length; i++){
            current_task[i].onclick = function (){
                this.parentNode.remove()
            }
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

// function addTask () {
//     `<li class="task-item"><i class="fa-regular fa-circle"></i> ${inputTask} <i class="fa-solid fa-x"></i></li>`;
//     listTask.insertAdjacentHTML("berforeend", addTask);
// }
