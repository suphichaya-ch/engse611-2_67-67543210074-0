document.addEventListener("DOMContentLoaded", function () {
    // Tabs Functionality
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });

    // Image Slider
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    prevBtn.addEventListener("click", () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    });

    nextBtn.addEventListener("click", () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    });

    showSlide(slideIndex);

    // To-Do List
    const todoInput = document.getElementById("todo-input");
    const addTodoBtn = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");
    const clearDoneBtn = document.getElementById("clear-done");
    const clearAllBtn = document.getElementById("clear-all");

    addTodoBtn.addEventListener("click", () => {
        const taskText = todoInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;

            const checkBtn = document.createElement("button");
            checkBtn.textContent = "✔";
            checkBtn.addEventListener("click", () => {
                li.classList.toggle("completed");
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑";
            deleteBtn.addEventListener("click", () => {
                todoList.removeChild(li);
            });

            li.appendChild(checkBtn);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
            todoInput.value = "";
        }
    });

    clearDoneBtn.addEventListener("click", () => {
        document.querySelectorAll(".completed").forEach(li => li.remove());
    });

    clearAllBtn.addEventListener("click", () => {
        todoList.innerHTML = "";
    });
});
