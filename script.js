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
  