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
::selection {
  background: #df91ad;
}
body {
  background-color: #151d25;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-template-rows: auto;
  grid-template-areas: "TodoList TodoForm";
  grid-column-gap: 3em;
  max-width: 1180px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
