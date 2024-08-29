let todoList = []

getListTodo().then((result)=>{
  todoList = [...result]
  filterListTodoById(3).then((result)=>{
    console.log(result)
  })

}).catch((err)=>console.log(`Error on script.js: ${result}`));



async function getListTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    return json
  } catch (error) {
    console.log(`Error on getListTodo function: ${error}`)
  }
  }
  
  
  async function filterListTodoById(id){
    const filteredTodoList = []

    for (const element of todoList) {
      element.userId ===id ?filteredTodoList.push(element):null
      
    }
   return filteredTodoList
  }


// const object = {completed: false,id:2,title: "quis ut nam facilis et officia qui",userId: 1}
