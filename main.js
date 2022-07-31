let tasksDiv = document.querySelector(".tasks");

function getTaskData() {
  return window.prompt("Enter The Task!");
}
/////////////

let data;
if (localStorage.data != null) {
  data = JSON.parse(localStorage.data);
} else {
  data = [];
}

function createTask() {
  TaskData = getTaskData();
  let TaskDiv = document.createElement("div");
  TaskDiv.innerText = TaskData;
  let deleteTask = document.createElement("span");
  deleteTask.innerHTML = `X`;
  deleteTask.className = "delete";
  let doneTask = document.createElement("span");

  if (TaskData === '' || TaskData === null) {
    return;
  }

  // Task Styling
  TaskDiv.style.cssText = `
      padding: 20px;
      border-left: 10px solid green;
      border-radius: 10px;
      background-color: white;
      box-shadow: #0000004f 3px 4px 20px 0;
      margin: 5px 0;
      position: relative;
      transition: 0.3s;
      `;

  // Delete btn Styling
  deleteTask.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    text-align: center;
    color: white;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    right: 15%;
    font-size: 1.5em;
    top: 25%;
    cursor: pointer;
      `;

  // Done btn Styling
  doneTask.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    color: white;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    font-size: 1em;
    top: 25%;
    cursor: pointer;
    transition: 0.5s;
    border: 1px solid black;
      `;
  doneTask.onclick = () => {
    doneTask.style.backgroundColor = 'green';
    doneTask.style.border = '3px solid grey';
    doneTask.innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
  TaskDiv.appendChild(deleteTask);
  TaskDiv.appendChild(doneTask);
  tasksDiv.append(TaskDiv);
  // adding task to localstorage and to the main array
  data.push(TaskData);
  localStorage.data = JSON.stringify(data);
  /////
}




document.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    // remove task from interface
    e.target.parentElement.style.opacity = "0";
    setTimeout(function () {
      e.target.parentElement.remove();  
    }, 250);
    // remove task from local storage
    
    // console.log(data);
    data.splice(data.indexOf( e.target.parentElement.innerText) , 1);
    localStorage.data = JSON.stringify(data);
  }
});



// appending data after reloading
function showData() {
  for(let i = 0; i < data.length ; i++) {
    let TaskDiv = document.createElement("div");
    TaskDiv.innerText = data[i];
    let deleteTask = document.createElement("span");
    let doneTask = document.createElement("span");
    deleteTask.innerHTML = `X`;
    deleteTask.className = "delete";

      // Task Styling
    TaskDiv.style.cssText = `
    padding: 20px;
    border-left: 10px solid green;
    border-radius: 10px;
    background-color: white;
    box-shadow: #0000004f 3px 4px 20px 0;
    margin: 5px 0;
    position: relative;
    transition: 0.3s;
    `;

    // Delete btn Styling
    deleteTask.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    text-align: center;
    color: white;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    right: 15%;
    font-size: 1.5em;
    top: 25%;
    cursor: pointer;
      `;

    // Done btn Styling
    doneTask.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: white;
    color: white;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    font-size: 1em;
    top: 25%;
    cursor: pointer;
    transition: 0.5s;
    border: 1px solid black;
      `;
    doneTask.onclick = () => {
    doneTask.style.backgroundColor = 'green';
    doneTask.style.border = '3px solid grey';
    doneTask.innerHTML = `<i class="fa-solid fa-check"></i>`;
    }




    TaskDiv.appendChild(deleteTask);
    TaskDiv.appendChild(doneTask);
    tasksDiv.append(TaskDiv);
  }
}



window.onload = function () {
  showData();
}



