//  MOckup mảng công việc (todos)

function randomId() {
  return Math.floor(Math.random() * 100000);
}
// }
let todos = [
  {
    id: 1,
    title: "Đi chơi",
    status: true,
  },
  {
    id: 2,
    title: "Làm bài tập",
    status: false,
  },
  {
    id: 3,
    title: "Đá bóng",
    status: true,
  },
];
console.log(todos);
const todo_list = document.querySelector(".todo-list");
var todo_input = document.querySelector('#todo-input');
var btn_add = document.querySelector('#btn-add');
var btn_update = document.querySelector('#btn-update');
var options = document.querySelectorAll(".todo-option-item input");

let idUpdate = null;
let isUpdate = false;


// THêm công việc
btn_add.addEventListener('click', function() {

  // Lấy dữ liệu trong ô input
  let  title = todo_input.value;
  // Kiểm tra dữ liệu
  if (title == ''){
    alert('tên công việc k được để trống')
    return;
  } 
  
  if(isUpdate == true) {
    // Sửa cv
    for ( var i = 0 ; i < todos.length; i++) {
      if(todos[i].id == idUpdate){
        todos[i].title = title
      }
    }
    idUpdate = null;
    isUpdate = false;
    btn_add.innerText = 'Thêm';
  } else {
    //THêm todo mới vào mảng todos
    let newTodo = {
      id: randomId(),
      title: title,
      status: false,
     };
     todos.push(newTodo);
  }
  // Render lại giao diện
  renderUI(todos);
  todo_input.value = '';
})

//  Mỗi công việc bao gồm 3  thuộc tính : id tittle status

//  từ todos => render ra ngoài giao diện
//  todo item => status = true => thêm class "active-todo", input - checked

// Render ra ngoài giao diện
function renderUI(arr) {
  //lọc dữ liệu
  let optionValue = getOptionSelected();
  switch (optionValue) {
    case 1:
      newTodos = [...arr] //copy arr vào newTodos
      break;
      case 2:
        newTodos = todos.filter((todo) => todo.status == false); //copy todos vào newTodos
        break;
        case 3:
        newTodos = todos.filter((todo) => todo.status == true); //copy todos vào newTodos
        break;
    default:
      newTodos = [...todos];
      break;

  }
  todo_list.innerHTML = "";

  // Kiểm tra danh sách todos có rỗng hay không?
  if (newTodos.length == 0) {
    todo_list.innerHTML = `<p class='todos-empty'>Không có công việc nào trong danh sách!</p>`;
    return;
  }
  for (let i = 0; i < newTodos.length; i++) {
    const t = newTodos[i];
    todo_list.innerHTML += `
          <div class="todo-item ${t.status ? "active-todo" : ""}">
              <div class="todo-item-title">
                  <input type="checkbox" ${
                    t.status ? "checked" : ""
                  } onclick=toggleStatus(${t.id})>
                  <p>${t.title}</p>
              </div>
              <div class="option">
                  <button class="btn btn-update" onclick=updateTodo(${t.id})>
                      <img src="./img/pencil.svg" alt="icon">
                  </button>
                  <button class="btn btn-delete" onclick=deleteTodo(${t.id})>
                      <img src="./img/remove.svg" alt="icon">
                  </button>
              </div>
          </div>
      `;
  }
}

// Lọc công việc
options.forEach(option => {
  option.addEventListener('change', function() {
    renderUI(todos)
  })
})

function getOptionSelected() {
  for (let i = 0; i < options.length; i++) {
    if(options[i].checked == true){
      return Number(options[i].value)
    }
  }
}


//Xóa công việc
  //Lặp qua mảng todos
  //Xóa công việc đó ra khỏi mảng todos
  //Tìm công việc nào có id = id truyền vào
  //Gọi lại renderUI
function deleteTodo(id) {
  for ( let i = 0; i < todos.length ; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
    }
  }renderUI(todos);
}


// Toggle status todo item
function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++){
    if (todos[i].id == id) {
  if ( todos[i].status == false ){
    todos[i].status = true
  } else {
    todos[i].status = false
  }
    }
  }
  renderUI(todos);
}


// update job 
function updateTodo(id) {
  for ( let i = 0 ; i < todos.length; i++) {
    if (todos[i].id == id) {
      todo_input.value = todos[i].title
    }
  }

  btn_add.innerHTML = 'Sửa';
  todo_input.focus(); //Coi như mình ấn luôn ô input
  idUpdate = id;
  isUpdate = true;
}





window.onload = renderUI(todos);
