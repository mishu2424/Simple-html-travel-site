let currentEditTask = null; // Holds the h4 element being edited

document.querySelector("#add-task-btn").addEventListener("click", (e) => {
  const item = document.querySelector("#task-add-field").value;

  // if user didn't add anything.   
  if (!item) {
    return alert("Please add an item");
  }
  
  // selecting the parent list to add items dynamically.   
  const parentList = document.querySelector("#parent-list");
  parentList.innerHTML += `
     <li>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <input type="checkbox" name="item" class="item-checkbox hover:outline-blue-300">
                            <h4 class="task-text">${item}</h4>
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="edit-btn border bg-red-600 text-white rounded-md py-2 px-4">Edit</button>
                            <button class="remove-btn border bg-red-600 text-white rounded-md py-2 px-4">Remove</button>
                        </div>
                    </div>
                </li>
    `;
    // reset
    document.querySelector("#task-add-field").value="";
});

// checkbox item
document.querySelector("#parent-list").addEventListener("click", (e) => {
  const target = e.target;

  // Remove
  if (target.classList.contains("remove-btn")) {
    const li = target.closest("li");
    li.remove();
  }

  // Checkbox (strikethrough text)
  if (target.classList.contains("item-checkbox")) {
    const li = target.closest("li");
    const taskText = li.querySelector(".task-text");
    taskText.classList.toggle("line-through");
    taskText.classList.toggle("text-gray-400");
  }

  // Edit Task (Open Modal)
  if (target.classList.contains("edit-btn")) {
    const taskText = target.closest("li").querySelector(".task-text");
    currentEditTask = taskText;
    document.querySelector("#edit-input").value = taskText.textContent;
    document.querySelector("#edit-modal").classList.remove("opacity-0", "translate-y-[-100vh]", "pointer-events-none");
    document.querySelector("#edit-modal").classList.add("opacity-100", "translate-y-0");
  }
});

// Save edited task
document.querySelector("#save-edit").addEventListener("click", () => {
  const newText = document.querySelector("#edit-input").value.trim();
  if (!newText) {
    return alert("Please modify the item's name");
  }
  if (newText && currentEditTask) {
    currentEditTask.textContent = newText;
  }
  closeModal();
});

// Cancel editing
document.querySelector("#cancel-edit").addEventListener("click", closeModal);

function closeModal() {
  document.querySelector("#edit-modal").classList.remove("opacity-100", "translate-y-0");
  document.querySelector("#edit-modal").classList.add("opacity-0", "translate-y-[-100vh]", "pointer-events-none");
  document.querySelector("#edit-input").value = "";
  currentEditTask = null;
}
