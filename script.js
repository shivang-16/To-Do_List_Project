
let add = document.getElementById('btn1');
add.addEventListener('click', function(e) {
e.preventDefault();
  let taskValue = task.value;
  let timeValue = time.value;
  localStorage.setItem(taskValue, timeValue);
  todo.innerHTML =`
  <div class = "todo-content">
   <div class = "todo-header">
   <h3>${taskValue}</h3>
   </div>
   <p>${timeValue}</p>
   </div>
  `  
  task.value = ''
  time.value =''
});
let clear = document.getElementById('btn2');
clear.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.clear();
    todo.innerHTML =``;
})





















// Get references to the required elements
// let taskc = document.getElementById('task');
// let timec = document.getElementById('time');
// let add = document.getElementById('btn1');
// let clear = document.getElementById('btn2');
// let todo = document.getElementById('todo');

// Retrieve and populate stored data during page load
// window.addEventListener('load', function() {
//   // Clear the existing content
//   todo.innerHTML = '';

//   // Retrieve stored data from local storage
//   for (let i = 0; i < localStorage.length; i++) {
//     let taskValue = localStorage.key(i);
//     let timeValue = localStorage.getItem(taskValue);

//     // Populate the todo element with the retrieved data
//     todo.innerHTML += `
//       <h3>${taskValue}</h3>
//       <p>${timeValue}</p>
//     `;
//   }
// });

// // Add event listener for storing data
// add.addEventListener('click', function(e) {
//   e.preventDefault();
//   let taskValue = taskc.value;
//   let timeValue = timec.value;
//   localStorage.setItem(taskValue, timeValue);

//   // Update the todo element with the new data
//   todo.innerHTML += `
//     <h3>${taskValue}</h3>
//     <p>${timeValue}</p>
//   `;
// });

// // Add event listener for clearing data
// clear.addEventListener('click', function(e) {
//   e.preventDefault();
//   localStorage.clear();
//   todo.innerHTML = '';
// });
