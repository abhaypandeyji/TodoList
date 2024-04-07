console.log("jai shree krishna bolo jai Radhe");

// let todoList = [
//     {
//         item: 'Chanting', 
//         dueDate: '2024-04-06'
//     },
//     {
//         item: 'Hearing', 
//         dueDate: '2024-04-06'
//     }
// ];

let st = localStorage.getItem('todoList');
todoList = JSON.parse(st);
let str = JSON.stringify(todoList);
localStorage.setItem('todoList', str);
// console.log(str);
// console.log(todoList);




displayItems();
function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
   

    todoList.push({item: todoItem, dueDate: todoDate});

    console.log(todoList);
    dateElement.value = '';
    inputElement.value = '';

    localStorage.removeItem('todoList');
    console.log(todoList);
    str = JSON.stringify(todoList);
    localStorage.setItem('todoList', str);

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');
    let newHTML = '';

    for(let i = 0;i<todoList.length;i++){
        // let item = todoList[i].item;
        // let dueDate = todoList[i].dueDate;

        let {item, dueDate} = todoList[i];
        newHTML += `
            
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn-delete" onClick="todoList.splice(${i}, 1);
            localStorage.removeItem('todoList');
            console.log(todoList);
            str = JSON.stringify(todoList);
            localStorage.setItem('todoList', str);
            displayItems();
            ">Delete</button>
            
        `;
    }

    containerElement.innerHTML = newHTML; 
}



