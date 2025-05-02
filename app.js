var parent = document.getElementById("parent");
function getTodo() {
  var inputTitleElement = document.getElementById("inputTitle");
  // console.log(inputTitleElement)
  var inputDescriptionElement = document.getElementById("inputDescription");
  // console.log(inputDescription)

  var inputTitle = inputTitleElement.value;
  var inputDescription = inputDescriptionElement.value;

  if (!inputTitle || !inputDescription) {
    alert("Input Field are Required");
    return;
  }

  var cardTodo = `<div class="card container mt-5 ">
      <div class="card-body cardBodyContaier p-3">
        <h5 class="card-title cardTitle">${inputTitle}</h5>

        <p class="card-text cardDescription mt-4 mb-4">
          ${inputDescription}
        </p>
        <button class="EditBtn" onclick="editTodo(this)">Edit</button>
        <button class="DeleteBtn" onclick="deleteTodo(this)">Delete</button>
      </div>
    </div> `;

  // console.log(cardTodo)
  var parent = document.getElementById("parent");
  parent.innerHTML += cardTodo;

  inputTitleElement.value = "";
  inputDescriptionElement.value = "";
}
function deleteTodo(deleteBtn) {
  // console.log(deleteBtn)
  // console.log(deleteBtn.parentNode.parentNode.parentNode)
  deleteBtn.parentNode.parentNode.innerHTML = "";
}

function editTodo(editBtn) {
  // console.log("editTodo()")

  var titleElement = editBtn.previousElementSibling.previousElementSibling;
  var changeTitle = prompt("Change Title Value", titleElement.innerHTML);
  titleElement.innerHTML = changeTitle;
  // console.log(titleElement)

  var cardTitle = editBtn.previousElementSibling;
  var cardDescrip = prompt("Change Description Value", cardTitle.innerHTML);
  cardTitle.innerHTML = cardDescrip;
  // console.log(cardTitle)
}

function deleteAll() {
  // console.log("Delete")
  parent.innerHTML = "";
}
