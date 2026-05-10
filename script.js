const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const taskContainer = document.getElementById("taskContainer");
const errorMessage = document.getElementById("errorMessage");


// Load tasks when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Form submit
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskName = taskInput.value.trim();
  const dueDate = dateInput.value;

  // Validation
  if (taskName === "" || dueDate === "") {
    errorMessage.classList.remove("hidden");
    return;
  }

  errorMessage.classList.add("hidden");

  const task = {
    id: Date.now(),
    name: taskName,
    date: dueDate,
  };

   addTaskToUI(task);
  saveTask(task);

  // Clear inputs
  taskInput.value = "";
  dateInput.value = "";
});

// Add task to screen
function addTaskToUI(task) {

  const taskCard = document.createElement("div");

  taskCard.className =
    "bg-white p-5 rounded-xl shadow-md";

  taskCard.setAttribute("data-id", task.id);

  taskCard.innerHTML = `
    <h3 class="text-xl font-semibold text-gray-800">
      ${task.name}
    </h3>

    <p class="text-gray-600 mt-2">
      Due Date: ${task.date}
    </p>

    <button
      class="deleteBtn mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
    >
      Delete
    </button>
  `;
 