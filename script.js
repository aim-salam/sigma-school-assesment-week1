async function getListTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const json = await response.json();

  console.log(json);
}

getListTodo();
