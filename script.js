// Selecting the container which will show all the list of tasks
var container=document.querySelector('.container');

// Selecting the input field
var value1=document.querySelector('.input'); 

// Selecting the add button
var add1=document.querySelector('.add');


class item{
    constructor(name)
    {
        this.create(name);
    }
    create(name)
    {
        var l1=document.createElement('div');
        l1.classList.add('item');
        
        // inside the l1 div Creating div which contains task text and delete button also adding event on delete button called "remove"
        l1.innerHTML =`<div class="item"><span class="item_input">${name}</span><button onclick="removeEl(this)" class="remove"><i title="Delete task" class="fas fa-trash"></i></button></div>`
        
        // Showing l1 div inside the container div
        container.appendChild(l1); 
    }
    remove(l1) 
    {
        container.removeChild(l1);
    }
}

container.innerHTML= localStorage.getItem("tasks");

// Adding "onclick" & "Press enter" event on add button which call the function "check"
add1.addEventListener('click', check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13) // 13 is the value for enter
    {
        check();
    }
})

// Writing Function which will be invoked during when add button is pressed
function check()
{
    if(value1.value!="") // Length of the input should be greater than 1
    {
        new item(value1.value);
        setToLocalStore();
        value1.value="";
    }
}

// Writing Function which will be invoked when deleteAll button is pressed
function deleteAll()
 {
    document.querySelector('.container').innerHTML="";
    setToLocalStore();
}

// When Refreshing the page it should work accordingly
function setToLocalStore() {
    localStorage.setItem("tasks",document.querySelector('.container').innerHTML);
}
function removeEl(e){
    e.parentElement.remove();
    setToLocalStore();
}
