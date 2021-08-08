const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li =event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDo는 toDos 중 하나
  saveToDos();
}

function paintToDo (newTodo) { // todo 그리는
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkbox = document.createElement("input");
  checkbox.type="checkbox"
  checkbox.classList.add("checkbox");
  li.appendChild(checkbox);
  const span=document.createElement("span");
  span.innerText=newTodo.text;
  const button = document.createElement("button");
  button.classList.add("delete_button");
  button.innerText="❌"
  button.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {  // js가 발생한 이벤트를 인자 event로 준다.
  event.preventDefault();
  const newTodo = toDoInput.value;  // input의 현재 value를 새로운 변수에 복사
  toDoInput.value="";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) { // 만약 savedToDos가 localStorage에 존재하면 -> 그냥 if(savedToDos) {} 이렇게 해도 됨
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo)
}