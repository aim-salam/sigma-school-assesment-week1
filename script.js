const todoList = [];
const tableBody = document.getElementById('table-body');

// Attach event listeners to filter buttons
for (let i = 1; i <= 10; i++) {
  document.getElementById(i.toString()).addEventListener('click', () => filterListTodoById(i));
}

// Fetch and display the to-do list
getListTodo()
  .then(result => {
    todoList.push(...result);
    todoList.forEach(insertTableItem);
  })
  .catch(err => console.error(`Error on script.js: ${err}`));

// Fetch the to-do list from the API
async function getListTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error on getListTodo function: ${error}`);
  }
}

// Filter and display to-dos by user ID
function filterListTodoById(filterId) {
  tableBody.innerHTML = "";
  todoList
    .filter(item => item.userId === filterId)
    .forEach(insertTableItem);
}

// Insert a to-do item into the table
function insertTableItem({ userId, id, title, completed }) {
  const tr = document.createElement('tr');

  // Create and append table cells
  tr.appendChild(createTableCell(userId, 'th', 'row'));
  tr.appendChild(createTableCell(id));
  tr.appendChild(createTableCell(title));
  tr.appendChild(createTableCell(completed));

  tableBody.appendChild(tr);
}

// Create a table cell
function createTableCell(content, cellType = 'td', scope) {
  const cell = document.createElement(cellType);
  if (scope) cell.setAttribute('scope', scope);
  cell.textContent = content;
  return cell;
}
