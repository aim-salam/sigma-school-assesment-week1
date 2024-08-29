let todoList = []
const tableBody = document.getElementById('table-body');

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

    for (const item of todoList) {
     insertTableItem(item)
    }
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
  tableBody.innerHTML = "";

  for (const item of todoList) {
    if (item.userId === filterId) {
      insertTableItem(item)
    }
  }
}


function insertTableItem({ userId, id, title,completed }){

  const tr = document.createElement('tr');
            
  // Create and populate the table header cell
  const th = document.createElement('th');
  th.setAttribute('scope', 'row');
  th.textContent = `${userId}`;
  
  // Create and populate the table data cells
  const td1 = document.createElement('td');
  td1.textContent = `${id}`;
  
  const td2 = document.createElement('td');
  td2.textContent = `${title}`;
  
  const td3 = document.createElement('td');
  td3.textContent = `${completed}`;
  
  // Append cells to the row
  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  
  // Append the row to the table body
  tableBody.appendChild(tr);

}
