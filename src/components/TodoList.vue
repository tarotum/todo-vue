<template>
  <div class="todo-list">
    <TodoItem v-for="todo in todos" :key="todo._id" :todo="todo"/>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  created() {
    this.$store.dispatch("getTodos");
  }
};
</script>
<style scoped>
.todo-list {
  grid-area: TodoList;
  overflow-y: scroll;
  max-height: 70vh;
  margin-top: 5em;
  padding-right: 1em;
}
</style>

