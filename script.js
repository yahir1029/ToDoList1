const textInput = document.getElementById("text-input");
const button = document.getElementById("button");
const itemsContainer = document.getElementById("items-container");
   
function addItemToList(){
  let userText = textInput.value;

  //Create p Element to store the text from the user in HTML
  let pElement = document.createElement("p");
  pElement.innerText = userText;
  //<P>Yessir!!!</p>

 let finishButton = document.createElement("button");
 finishButton.innerText = "Finish";
 finishButton.className="button2";



let deleteButton = document.createElement("button");
deleteButton.innerText = "Delete";
deleteButton.className="button1";

//<button>Delete</button>

let toDoElementContainer = document.createElement("div");
toDoElementContainer.appendChild(pElement);
toDoElementContainer.appendChild(finishButton);
toDoElementContainer.appendChild(deleteButton);

itemsContainer.appendChild(toDoElementContainer);

console.log(toDoElementContainer);
//<div>
//   <p>Yessir!!</p>
//</div>
}

button.addEventListener("click",addItemToList);


deleteButton















