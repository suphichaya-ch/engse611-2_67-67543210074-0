document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
    const clearCompletedBtn = document.getElementById("clear-completed");
    const clearAllBtn = document.getElementById("clear-all");

    addBtn.addEventListener("click", addTask);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    function addTask() {
        if (input.value.trim() === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${input.value}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">🗑</button>
            </div>
        `;

        todoList.appendChild(li);
        input.value = "";

        li.querySelector(".complete-btn").addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });
    }

    clearCompletedBtn.addEventListener("click", () => {
        document.querySelectorAll(".completed").forEach(task => task.remove());
    });

    clearAllBtn.addEventListener("click", () => {
        todoList.innerHTML = "";
    });
});
