<template>
    <div class="home text-center">

        <div class="container mt-5">
            <h1 class="display-4 text-primary">
                Bienvenido al gestor de tareas de Mauro Duarte.
            </h1>
            <p class="lead">
                Esta aplicación te permite gestionar tus tareas de manera
                eficiente. Puedes añadir nuevas tareas manualmente o extraerlas
                desde una API.
            </p>

            <img
                alt="Vue logo"
                src="../assets/foto.jpg"
                class="mi-foto"
            />

            <h3 class="text-info">Secciones de la Aplicación</h3>
            <ul class="list-unstyled">
                <li>
                    <strong>Añadir Tarea:</strong> Permite ingresar nuevas
                    tareas manualmente.
                </li>
                <li>
                    <strong>Lista de Tareas:</strong> Muestra todas las tareas
                    extraídas desde la API, permitiendo marcarlas como
                    completadas o eliminarlas.
                </li>
                <li>
                    <strong>Vista Combinada:</strong> Combina las
                    funcionalidades de añadir tareas manualmente y ver las
                    tareas de la API al mismo tiempo.
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
};
</script>

<style scoped>
    .home {
        font-family: Arial, sans-serif;
    }

    .navbar {
        font-size: 1.1rem;
    }

    .list-unstyled li {
        font-size: 1rem;
        color: #555;
        margin-top: 0.5rem;
    }
    .mi-foto{
        margin: 5rem;
        width: 300px;
        border-radius: 50%;
        border: 5px solid black;
    }
    .mi-foto:hover{
        border-color: green;
    }

</style>