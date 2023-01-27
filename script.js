var container=document.querySelector('.container'); // variable for container
var value1=document.querySelector('.input'); // variable to store the 1st value of the input
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
        // changed input tag to span tag
        l1.innerHTML =`<div class="item"><span class="item_input">${name}</span><button onclick="removeEl(this)" class="remove"><i title="Delete task" class="fas fa-trash"></i></button></div>`
        container.appendChild(l1); // So, User can add any no. of tasks
    }
    remove(l1) 
    {
        container.removeChild(l1);
    }
}
container.innerHTML= localStorage.getItem("tasks");
add1.addEventListener('click', check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13) // 13 is the value for enter
    {
        check();
    }
})
function check()
{
    if(value1.value!="") // Length of the input should be greater than 1
    {
        new item(value1.value);
        setToLocalStore();
        value1.value="";
    }
}
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