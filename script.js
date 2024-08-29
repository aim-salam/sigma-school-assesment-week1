let todoList = []
const dropdownMenu = document.getElementById('list-menu');

document.getElementById("1").addEventListener("click",()=>{filterListTodoById(1)});
document.getElementById("2").addEventListener("click",()=>{filterListTodoById(2)});
document.getElementById("3").addEventListener("click",()=>{filterListTodoById(3)});
document.getElementById("4").addEventListener("click",()=>{filterListTodoById(4)});
document.getElementById("5").addEventListener("click",()=>{filterListTodoById(5)});
document.getElementById("6").addEventListener("click",()=>{filterListTodoById(6)});
document.getElementById("7").addEventListener("click",()=>{filterListTodoById(7)});
document.getElementById("8").addEventListener("click",()=>{filterListTodoById(8)});
document.getElementById("9").addEventListener("click",()=>{filterListTodoById(9)});
document.getElementById("10").addEventListener("click",()=>{filterListTodoById(10)});

getListTodo()
  .then((result) => {
    todoList = [...result];
  })
  .catch((err) => console.log(`Error on script.js: ${err}`));

async function getListTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(`Error on getListTodo function: ${error}`);
  }
}

function filterListTodoById(filterId) {
  dropdownMenu.innerHTML = "";

  for (const { userId, id, title } of todoList) {
    if (userId === filterId) {
      const item = document.createElement("li");
      item.textContent = `${id}: ${title}`;
      item.className = "list-group-item";
      dropdownMenu.appendChild(item);
    }
  }
}
