(function(){"use strict";var t={5947:function(t,a,e){var s=e(6848),n=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary text-white"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand text-white",attrs:{href:"/"}},[t._v("Gestor de Tareas")]),a("div",{staticClass:"navbar-nav ml-auto"},[a("router-link",{staticClass:"nav-item nav-link text-white",attrs:{href:"/addtask"}},[t._v("Añadir Tarea | ")]),a("router-link",{staticClass:"nav-item nav-link text-white",attrs:{href:"/tasklist"}},[t._v("Lista de Tareas |")]),a("router-link",{staticClass:"nav-item nav-link text-white",attrs:{href:"/combinedlist"}},[t._v("Vista Combinada")])],1)])]),a("router-view")],1)},i=[],r=e(1656),o={},l=(0,r.A)(o,n,i,!1,null,null,null),c=l.exports,d=e(6178),u=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"home text-center"},[a("div",{staticClass:"container mt-5"},[a("h1",{staticClass:"display-4 text-primary"},[t._v(" Bienvenido al gestor de tareas de Mauro Duarte. ")]),a("p",{staticClass:"lead"},[t._v(" Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API. ")]),a("img",{staticClass:"mi-foto",attrs:{alt:"Vue logo",src:e(7118)}}),a("h3",{staticClass:"text-info"},[t._v("Secciones de la Aplicación")]),a("ul",{staticClass:"list-unstyled"},[a("li",[a("strong",[t._v("Añadir Tarea:")]),t._v(" Permite ingresar nuevas tareas manualmente. ")]),a("li",[a("strong",[t._v("Lista de Tareas:")]),t._v(" Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas. ")]),a("li",[a("strong",[t._v("Vista Combinada:")]),t._v(" Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo. ")])])])])}],v={name:"HomeView"},p=v,k=(0,r.A)(p,u,m,!1,null,"1ff27ac9",null),f=k.exports,h=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("div",{staticClass:"add-task-container container mt-5"},[a("h1",[t._v("Añadir Tarea")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"task-input shadow p-3 bg-body rounded",attrs:{placeholder:"Añadir nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(a){a.target.composing||(t.newTask=a.target.value)}}}),a("button",{staticClass:"btn btn-dark shadow",on:{click:t.addTask}},[t._v(" Añadir ")])]),t.tasks.length>0?a("div",{staticClass:"task-list"},t._l(t.tasks,(function(e){return a("div",{key:e.id,staticClass:"task-item"},[a("span",{class:{completed:e.completed}},[t._v(t._s(e.todo))]),a("div",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.toggleTaskCompletion(e)}}},[t._v(" "+t._s(e.completed?"Desmarcar":"Completar")+" ")]),a("button",{staticClass:"btn btn-secondary",on:{click:function(a){return t.deleteTask(e)}}},[t._v(" Eliminar ")])])])})),0):t._e()])])},b=[function(){var t=this,a=t._self._c;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-primary text-white"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand text-white",attrs:{href:"/"}},[t._v("Gestor de Tareas")]),a("div",{staticClass:"navbar-nav ml-auto"},[a("a",{staticClass:"nav-item nav-link text-white",attrs:{href:"/addtask"}},[t._v("Añadir Tarea | ")]),a("a",{staticClass:"nav-item nav-link text-white",attrs:{href:"/tasklist"}},[t._v("Lista de Tareas |")]),a("a",{staticClass:"nav-item nav-link text-white",attrs:{href:"/combinedlist"}},[t._v("Vista Combinada")])])])])}],C={name:"AddTask",data(){return{newTask:"",tasks:[]}},methods:{addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},deleteTask(t){this.tasks=this.tasks.filter((a=>a.id!==t.id))},toggleTaskCompletion(t){t.completed=!t.completed}}},_=C,g=(0,r.A)(_,h,b,!1,null,"29712569",null),T=g.exports,y=function(){var t=this,a=t._self._c;return a("div",[a("h1",{staticClass:"mt-5"},[t._v("Lista de Tareas")]),a("button",{staticClass:"btn btn-dark row-col-2 gy-5",on:{click:t.fetchTasks}},[t._v("Cargar Tareas")]),a("br"),a("br"),t.tasks.length>0?a("div",{staticClass:"row gy-5"},t._l(t.tasks,(function(e){return a("TodoItem",{key:e.id,attrs:{title:e.todo,completed:e.completed},on:{"toggle-completion":function(a){return t.toggleTaskCompletion(e)},delTodo:function(a){return t.deleteTask(e)}}})})),1):t._e()])},w=[],x=e(4373),A=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center"},[a("h5",{staticClass:"fw-bolder col-5",style:{textDecoration:t.completed?"line-through":"none"}},[a("hr"),t._v(" "+t._s(t.title)+" ")]),a("span",{staticClass:"opacity-50",staticStyle:{"font-size":"12px"}},[t._v(" "+t._s(t.completed?"FINALIZADA":"PENDIENTE")+" ")])]),a("div",{staticClass:"row d-flex justify-content-center"},[a("button",{staticClass:"btn btn-primary col-1",on:{click:function(a){return t.$emit("toggle-completion")}}},[t._v(" "+t._s(t.completed?"✘":"✔")+" ")]),a("button",{staticClass:"btn btn-secondary col-1",on:{click:function(a){return t.$emit("delTodo")}}},[t._v(" Eliminar ")])])])},P=[],O={name:"TodoItem",props:{title:String,completed:Boolean}},j=O,E=(0,r.A)(j,A,P,!1,null,"6ec1080b",null),I=E.exports,D={name:"TaskList",components:{TodoItem:I},data(){return{tasks:[]}},methods:{async fetchTasks(){try{const t=await x.A.get("https://dummyjson.com/todos");this.tasks=t.data.todos}catch(t){console.error("Error fetching tasks:",t)}},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((a=>a.id!==t.id))}}},L=D,S=(0,r.A)(L,y,w,!1,null,null,null),V=S.exports,M=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"combined-view container mt-5"},[a("h1",[t._v("Vista Combinada de Tareas")]),a("div",{staticClass:"add-task-section"},[a("h2",[t._v("Añadir Tarea Manualmente")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"task-input shadow p-3 bg-body rounded",attrs:{placeholder:"Añadir nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(a){a.target.composing||(t.newTask=a.target.value)}}}),a("button",{staticClass:"btn btn-dark shadow",on:{click:t.addTask}},[a("i",{staticClass:"bi bi-plus-lg"}),t._v(" Añadir ")])])]),a("div",{staticClass:"fetch-task-section"},[a("h2",[t._v("Extraer Tareas de la API")]),a("button",{staticClass:"btn btn-dark",on:{click:t.fetchTasks}},[a("i",{staticClass:"bi bi-arrow-repeat"}),t._v(" Cargar Tareas de la API ")])]),a("div",{staticClass:"task-list-section"},[a("h2",[t._v("Lista Combinada de Tareas")]),t.tasks.length>0?a("div",{staticClass:"task-list"},t._l(t.tasks,(function(e){return a("div",{key:e.id,staticClass:"task-item"},[a("span",{class:{completed:e.completed}},[t._v(t._s(e.todo))]),a("div",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.toggleTaskCompletion(e)}}},[a("i",{class:e.completed?"bi bi-x-lg":"bi bi-check-lg"}),t._v(" "+t._s(e.completed?"Desmarcar":"Completar")+" ")]),a("button",{staticClass:"btn btn-secondary",on:{click:function(a){return t.deleteTask(e)}}},[a("i",{staticClass:"bi bi-trash"}),t._v(" Eliminar ")])])])})),0):t._e()])])])},N=[],G={name:"CombinedView",data(){return{newTask:"",tasks:[]}},methods:{addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},async fetchTasks(){try{const t=await x.A.get("https://dummyjson.com/todos"),a=t.data.todos.map((t=>({...t,id:`${t.id}-api`})));this.tasks=[...a,...this.tasks]}catch(t){console.error("Error fetching tasks:",t)}},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((a=>a.id!==t.id))}}},$=G,B=(0,r.A)($,M,N,!1,null,"3c85b3ac",null),F=B.exports;s.Ay.use(d.Ay);const z=[{path:"/",name:"home",component:f},{path:"/addtask",name:"AddTask",component:T},{path:"/tasklist",name:"TaskList",component:V},{path:"/combinedlist",name:"CombinedView",component:F}],H=new d.Ay({mode:"history",base:"/GestorTareas-Plantilla/",routes:z});var Z=H;s.Ay.config.productionTip=!1,new s.Ay({router:Z,render:t=>t(c)}).$mount("#app")},7118:function(t,a,e){t.exports=e.p+"img/foto.5ec5d36c.jpg"}},a={};function e(s){var n=a[s];if(void 0!==n)return n.exports;var i=a[s]={exports:{}};return t[s].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(a,s,n,i){if(!s){var r=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],i=t[d][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(t){return e.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(d--,1);var c=n();void 0!==c&&(a=c)}}return a}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,n,i]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/GestorTareas-Plantilla/"}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var n,i,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(a){return 0!==t[a]}))){for(n in o)e.o(o,n)&&(e.m[n]=o[n]);if(l)var d=l(e)}for(a&&a(s);c<r.length;c++)i=r[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},s=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[504],(function(){return e(5947)}));s=e.O(s)})();
//# sourceMappingURL=app.3616db51.js.map