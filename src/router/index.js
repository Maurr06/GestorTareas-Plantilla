import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '@/views/AddTask.vue';
import TaskList from '@/views/TaskList.vue';
import CombinedView from '@/views/CombinedView.vue';


// Importa los otros componentes en esta sección

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addtask',
    name: 'AddTask', // Ruta para añadir tareas
    component: AddTask // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: TaskList
  }, 
  {
    path: '/combinedlist',
    name: 'CombinedView',
    component: CombinedView
  }, 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
