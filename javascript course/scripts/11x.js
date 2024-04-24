/*let todoList= [{
   name:"make dinner",
   dueDate:"2022-12-12"
},{
   name:"watch youtube",
   dueDate:"2024-9-9"
}];*/

let todoList = JSON.parse(localStorage.getItem("todoList")) || [{
   name:"Live",
   dueDate:"now"
 }];

refresh_HTML();

function refresh_HTML(){
   let todoList_HTML="";

   for(let i=0;i<todoList.length;i++){
      const todoObject=todoList[i];
      const { name , dueDate }=todoObject;
     // const name=todoObject.name;
      //const dueDate=todoObject.dueDate;
      const HTML=`
      <div>${name}</div>
      <div>${dueDate}</div>      
       
      <button class="delete-button" onclick="
      todoList.splice(${i},1);
      
      refresh_HTML();
      ">Delete</button>
      `;
      todoList_HTML+=HTML;
   }
   localStorage.setItem("todoList", JSON.stringify(todoList));
   document.querySelector(".js-todo-list").innerHTML=todoList_HTML
}


function addTodo(){
   let input=document.querySelector(".js-name-input");
   let name=input.value;
   let dateInput=document.querySelector(".js-date-input");
   let dueDate=dateInput.value;
   todoList.push({
      name,dueDate
      //name:name,
      //dueDate:dueDate
   });
   localStorage.setItem("todoList", JSON.stringify(todoList));
   
   input.value="";
   refresh_HTML();
}
function buttonfxn(event){
   if(event.key=="Enter"){
      addTodo();
   }
}