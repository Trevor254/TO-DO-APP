const todos =[{
    text:'Order cat food',
    completed: false
},
{
     text:'Clean Kitchen',
     completed: false
},
{
     text:'Buy food',
     completed: true
},{
    text:'Do work',
    completed:false
},{
    text:'Exercise',
    completed:true
}];


const filters={   
    searchText:"",
    hideCompleted:false
};



const renderTodos = function(todos, filters) {

    const filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.text.toUpperCase().includes
        (filters.searchText.toUpperCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function(todo){
        return !todo.completed;
    });

document.querySelector('#todos').innerHTML = "";


const summary = document.createElement('h2');  //document.create element creates a new element in the form of h2
summary.textContent = `You have ${incompleteTodos.length} todos left`; //
document.querySelector('#todos').appendChild(summary);


filteredTodos.forEach(function(todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
})

};

renderTodos(todos,filters);





//Listen for to-do text change
document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(e.target.value);
})




//search for todos
document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value;
    renderTodos(todos,filters);
})



//add todo to DOM
document.querySelector('#new-todo').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    });
    
    renderTodos(todos, filters);
    e.target.elements.todoText.value = ''
});


document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})