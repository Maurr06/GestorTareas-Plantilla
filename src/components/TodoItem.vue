<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="container">
        <!-- Contenedor del título y el estado de la tarea -->
        <div class="row d-flex justify-content-center">
            <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
            <!-- Comentario: Cambia este estilo o agrega clases personalizadas -->
            <h5 :style="{ textDecoration: completed ? 'line-through' : 'none' }" class="fw-bolder col-5">
                <hr>
                {{ title }}
            </h5>

            <!-- Muestra si la tarea está Completada o Pendiente -->
            <!-- Comentario: Puedes cambiar este texto o agregar etiquetas visuales (por ejemplo, con colores o iconos) -->
            <span style="font-size: 12px" class="opacity-50">
                {{ completed ? 'FINALIZADA' : 'PENDIENTE' }}
            </span>
        </div>

        <!-- Contenedor de botones de acción -->
        <div class="row d-flex justify-content-center">
            <!-- Botón para marcar la tarea como completada o pendiente -->
            <!-- Emite el evento 'toggle-completion' para indicar que se cambió el estado de la tarea -->
            <!-- Comentario: Personaliza el texto, estilo o reemplaza con un ícono (ej.  / ✘) -->
            <button @click="$emit('toggle-completion')" class="btn btn-primary col-1">
                {{ completed ? '✘' : '✔' }}
            </button>

            <!-- Botón para eliminar la tarea de la lista -->
            <!-- Emite el evento 'delTodo' para indicar que se debe eliminar esta tarea -->
            <!-- Comentario: Modifica el estilo, el texto, o reemplaza con un ícono como una papelera -->
            <button @click="$emit('delTodo')" class="btn btn-secondary col-1">
                Eliminar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    // Define el nombre del componente
    name: 'TodoItem',

    // Define las propiedades que este componente recibirá del componente padre
    // Comentario: Puedes agregar más propiedades si es necesario (por ejemplo, 'dueDate' para la fecha de vencimiento)
    props: {
        title: String,      // Título de la tarea
        completed: Boolean, // Estado de la tarea (completada o pendiente)
    }
}
</script>

<style scoped>
/* Puedes agregar tus propios estilos aquí */
/* Por ejemplo, cambia el color de fondo de las tareas completadas */

</style>