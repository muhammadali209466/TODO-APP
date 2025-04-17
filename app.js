var listParent = document.getElementById("listParent");
// console.log(listParent)

function createNote() {
  var input = document.getElementById("input");
  if (!input.value) {
    alert("input field are required ");
    return;
  }
  var liElement = document.createElement("li");
  liElement.innerText = input.value;
  // console.log(liElement)
  var editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";

  editBtn.setAttribute("onclick", "editTODO(this)");

  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";

  deleteBtn.setAttribute("onclick", "deleteTODO(this)");

  var completebtn = document.createElement("button");
  completebtn.innerHTML = "InComplete";
  completebtn.setAttribute("onclick", "completeTODO(this)");

  editBtn.style.margin = "4px";
  deleteBtn.style.margin = "4px";
  completebtn.style.margin = "4px";

  liElement.append(editBtn);
  liElement.append(deleteBtn);
  liElement.append(completebtn);
  // console.log(liElement)

  listParent.appendChild(liElement);
  input.value = "";
}

function editTODO(editBtn) {
  var editValue = prompt(
    "Enter TODO Value",
    editBtn.previousSibling.textContent
  );
  if (!editValue) {
    alert("Enter Edit Value");

    return;
  }

  // console.log("editValue", editValue);
  editBtn.previousSibling.textContent = editValue;
}
function deleteTODO(deleteBtn) {
  console.log("deleteTODO()", deleteBtn.parentNode);
  deleteBtn.parentNode.remove();
}

function deletetAll() {
  listParent.innerHTML = "";
}

function completeTODO(btn) {
  console.log("btn", btn.parentNode);
  btn.parentNode.className = "liLine";
}
