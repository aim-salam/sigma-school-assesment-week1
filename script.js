let todoList = []
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



// Directly fetch when page loaded
getListTodo().then((result)=>{
  todoList = [...result]
  console.log(result)


}).catch((err)=>console.log(`Error on script.js: ${err}`));





async function getListTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    return json
  } catch (error) {
    console.log(`Error on getListTodo function: ${error}`)
  }
  }
  
  
 function filterListTodoById(id){
    const filteredTodoList = []

    for (const element of todoList) {
      element.userId ===id ?filteredTodoList.push(element):null
      
    }
    console.log(filteredTodoList)
  //  return filteredTodoList
  }


