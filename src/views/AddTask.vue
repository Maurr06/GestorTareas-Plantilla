<template>
    <div>
        <div class="add-task-container container mt-5">
            <h1>Añadir Tarea</h1>
            <div class="input-group">
                <input
                    v-model="newTask"
                    @keyup.enter="addTask"
                    placeholder="Añadir nueva tarea"
                    class="task-input shadow p-3 bg-body rounded"
                />
                <button @click="addTask" class="btn btn-dark shadow">
                    Añadir
                </button>
            </div>

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
                            {{ task.completed ? "Desmarcar" : "Completar" }}
                        </button>
                        <button
                            @click="deleteTask(task)"
                            class="btn btn-secondary"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddTask",
    data() {
        return {
            newTask: "", // Campo de entrada para la nueva tarea
            tasks: [], // Lista de tareas locales
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(),
            };

            // Añadir la nueva tarea al inicio de la lista
            this.tasks.unshift(newTask);
            this.newTask = ""; // Limpiar el campo de entrada después de agregar
        },

        // Elimina una tarea específica de la lista
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },

        // Cambia el estado de la tarea entre completada y no completada
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
    },
};
</script>

<style scoped>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
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

.add-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
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
