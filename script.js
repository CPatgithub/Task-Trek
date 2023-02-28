// Selecting the container which will show all the list of tasks
var container=document.querySelector('.container');

// Selecting the input field
var value1=document.querySelector('.input'); 

// Selecting the add button
var add1=document.querySelector('.add');

// this "item" class is used to create new to-do list items by creating new HTML elements and adding them to the "container" div. 
// It also provides a method to remove the HTML element from the "container" div.
class item{
    
    // This is the constructor method of the "item" class, which is called when a new "item" object is created. 
    // It takes a "name" parameter and calls the "create" method of the same class.
    constructor(name)
    {
    // Creating object of class item         
        this.create(name);
    }
    create(name)
    {
        var l1=document.createElement('div');
        l1.classList.add('item');
        
        // inside the l1 div, Creating div which contains task text and delete button also adding event on delete button called "remove"
        l1.innerHTML =`<span class="item_input">${name}</span><button onclick="removeEl(this)" class="remove"><i title="Delete task" class="fas fa-trash"></i></button>`
        
        // Showing l1 div inside the container div
        container.appendChild(l1); 
    }
    
    // This is the "remove" method of the "item" class, which removes the HTML element passed as a parameter from the "container" div.
    remove(l1) 
    {
        container.removeChild(l1);
    }
}
// Retrives the value of the "tasks" key from the browser's local storage using the localStorage.getItem() method, and 
// then sets the innerHTML property of the container element to that value.
container.innerHTML= localStorage.getItem("tasks");

// Adding "onclick" & "Press enter" event on add button which call the function "check"
add1.addEventListener('click', check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13) // 13 is the value for enter
    {
        check();
    }
})

// Writing Function which will be invoked when add button is pressed
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
// function setToLocalStore() is used to save the tasks present in the to-do list in the local storage of the browser. 
// The localStorage property allows saving key/value pairs in a web browser and is used to store data without an expiration date.
function setToLocalStore() {
    localStorage.setItem("tasks",document.querySelector('.container').innerHTML);
}
// When the delete button is clicked, the removeEl() function is called with "e" as the argument which is the button that was clicked.
function removeEl(e){
    e.parentElement.remove();
    setToLocalStore();
//     setToLocalStore() function is called to update the local storage with the new list of tasks after the deletion.
}
