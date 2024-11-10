<template>
    <div>

        <h1 class="mt-5">Lista de Tareas</h1>
        <button @click="fetchTasks" class="btn btn-dark row-col-2 gy-5">Cargar Tareas</button><br><br>
        <div v-if="tasks.length > 0" class="row gy-5">
            <!-- Utilizar el componente `TodoItem` para cada tarea -->
            <TodoItem 
                v-for="task in tasks" 
                :key="task.id"
                :title="task.todo" 
                :completed="task.completed" 
                @toggle-completion="toggleTaskCompletion(task)"
                @delTodo="deleteTask(task)"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import TodoItem from '@/components/TodoItem.vue';

export default {
    name: "TaskList",
    components: {
        TodoItem
    },
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        async fetchTasks() {
            try {
                const response = await axios.get('https://dummyjson.com/todos');
                this.tasks = response.data.todos;
            } catch (error) {
                console.error('Error fetching tasks:', error);
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
