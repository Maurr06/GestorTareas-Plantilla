<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
            <div class="container">
                <a class="navbar-brand text-white" href="/">Gestor de Tareas</a>
                <div class="navbar-nav ml-auto">
                    <a class="nav-item nav-link text-white" href="/addtask">Añadir Tarea | </a>
                    <a class="nav-item nav-link text-white" href="/tasklist">Lista de Tareas |</a>
                    <a class="nav-item nav-link text-white" href="/combinedlist">Vista Combinada</a>
                </div>
            </div>
        </nav>

        <div class="combined-view container mt-5">
            <h1>Vista Combinada de Tareas</h1>

            <!-- Sección para agregar tareas manualmente -->
            <div class="add-task-section">
                <h2>Añadir Tarea Manualmente</h2>
                <div class="input-group">
                    <input
                        v-model="newTask"
                        @keyup.enter="addTask"
                        placeholder="Añadir nueva tarea"
                        class="task-input shadow p-3 bg-body rounded"
                    />
                    <button @click="addTask" class="btn btn-dark shadow">
                        <i class="bi bi-plus-lg"></i> Añadir
                    </button>
                </div>
            </div>

            <!-- Botón para cargar tareas desde la API -->
            <div class="fetch-task-section">
                <h2>Extraer Tareas de la API</h2>
                <button @click="fetchTasks" class="btn btn-dark">
                    <i class="bi bi-arrow-repeat"></i> Cargar Tareas de la API
                </button>
            </div>
            <!-- Lista combinada de tareas manuales y de la API -->
            <div class="task-list-section">
                <h2>Lista Combinada de Tareas</h2>
                <div v-if="tasks.length > 0" class="task-list">
                    <div v-for="task in tasks" :key="task.id" class="task-item">
                        <span :class="{ completed: task.completed }">{{
                            task.todo
                        }}</span>
                        <div>
                            <button
                                @click="toggleTaskCompletion(task)"
                                class="btn btn-primary"
                            >
                                <i
                                    :class="
                                        task.completed
                                            ? 'bi bi-x-lg'
                                            : 'bi bi-check-lg'
                                    "
                                ></i>
                                {{ task.completed ? "Desmarcar" : "Completar" }}
                            </button>
                            <button
                                @click="deleteTask(task)"
                                class="btn btn-secondary"
                            >
                                <i class="bi bi-trash"></i> Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CombinedView",
    data() {
        return {
            newTask: "",
            tasks: [], // Lista de tareas combinada (manuales y de API)
        };
    },
    methods: {
        // Añadir tarea manualmente
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(),
            };

            this.tasks.unshift(newTask);
            this.newTask = ""; // Limpiar el campo de entrada
        },

        // API
        async fetchTasks() {
            try {
                const response = await axios.get("https://dummyjson.com/todos");
                const apiTasks = response.data.todos.map((task) => ({
                    ...task,
                    id: `${task.id}-api`, // Para evitar conflicto de IDs
                }));
                this.tasks = [...apiTasks, ...this.tasks]; // Combina las tareas de la API con las manuales
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        },
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
.combined-view {
    max-width: 950px;
    margin: 0 auto;
    padding: 20px;
}

.add-task-section,
.fetch-task-section,
.task-list-section {
    margin-bottom: 20px;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}
</style>
