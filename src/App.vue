<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-primary text-white">
            <div class="container">
                <a class="navbar-brand text-white" href="/">Gestor de Tareas</a>
                <div class="navbar-nav ml-auto">
                    <router-link class="nav-item nav-link text-white" href="/addtask"
                        >Añadir Tarea |
                    </router-link>
                    <router-link class="nav-item nav-link text-white" href="/tasklist"
                        >Lista de Tareas |</router-link
                    >
                    <router-link class="nav-item nav-link text-white" href="/combinedlist"
                        >Vista Combinada</router-link
                    >
                </div>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
