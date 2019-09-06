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
    searchText:""
};


const renderTodos = function(todos, filters) {
    const incompleteTodos = todos.filter(function(todo){
        return !todo.completed;
    })

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function(todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
 })

}



// listen for new todo creation
document.querySelector('#add-todo').addEventListener('click',function(e){
    console.log('Add a new todo');
});

//Listen for to-do text change
document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(e.target.value);
})

