$.get('http://jsonplaceholder.typicode.com/posts', function(todos){
    console.log(todos);
});

//
//

let clearList = document.getElementById['deleteList'];
let todoList = document.querySelector('.listOne');
clearList.addEventListener['click', function(]{
    todoList.innerHTML = "";
});