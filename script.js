//Storing data in localStorage
let add = document.getElementById('btn1')
add.addEventListener('click', function(e) {
  e.preventDefault();
  let taskValue = task.value;
  let timeValue = time.value;
  localStorage.setItem(taskValue, timeValue);

  todo.innerHTML += `
  <div class = "todo-content">
      <div class = "todo-header">
      <h3>${taskValue}</h3>
      <div class="close">X</div>
      </div>
      <p>${timeValue}</p>
      </div>
  `;
});

  // Restore data from local storage on relode
  for (let i = 0; i < localStorage.length; i++) {
    let taskValue = localStorage.key(i);
    let timeValue = localStorage.getItem(taskValue);

    todo.innerHTML += `
    <div class = "todo-content">
      <div class = "todo-header">
      <h3>${taskValue}</h3>
      <div class="close">X</div>
      </div>
      <p>${timeValue}</p>
      </div>
    `;
  }



//clearing local storage
let clear = document.getElementById('btn2');
clear.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.clear();
    todo.innerHTML =``;
})
 
//removing items
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('close')) {
    let todoContent = e.target.closest('.todo-content');
    let taskValue = todoContent.querySelector('h3').textContent;
    let d =confirm('Do you want to delete your task?')
  if(d){
    localStorage.removeItem(taskValue);
    todoContent.remove();
 }
  }
});
