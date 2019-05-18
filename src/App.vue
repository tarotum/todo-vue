<template>
  <div id="app">
    <TodoForm/>
    <TodoList/>
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
#app {
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
