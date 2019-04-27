<template>
  <div id="app">
    <TodoList/>
    <TodoForm/>
  </div>
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";
export default {
  name: "app",
  components: {
    TodoForm,
    TodoList
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
::selection {
  background: orangered;
}
body {
  background-color: #151d25;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "TodoForm"
    "TodoList";
  grid-column-gap: 3em;
  max-width: 1180px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 1100px) {
  #app {
    grid-template-columns: 5fr 3fr;
    grid-template-rows: auto;
    grid-template-areas: "TodoList TodoForm";
  }
}
</style>
