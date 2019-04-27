<template>
  <div>
    <div class="todo-list">
      <TodoItem v-for="todo in todos" :key="todo._id" :todo="todo"/>
    </div>
    <div class="todo-filters">
      <button @click="filterTodos('all')">All</button>
      <button @click="filterTodos('active')">Active</button>
      <button @click="filterTodos('complited')">Completed</button>
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  data() {
    return {
      filter: "all"
    };
  },
  created() {
    this.$store.dispatch("Todos/GET_TODOS");
  },
  computed: {
    todos() {
      switch (this.filter) {
        case "all":
          return this.$store.getters["Todos/getTodos"];
        case "active":
          return this.$store.getters["Todos/getTodos"].filter(
            todo => todo.completed === false
          );
        case "complited":
          return this.$store.getters["Todos/getTodos"].filter(
            todo => todo.completed === true
          );
        default:
          return this.$store.getters["Todos/getTodos"];
      }
    }
  },
  methods: {
    filterTodos(filter) {
      this.filter = filter;
    }
  }
};
</script>
<style scoped>
.todo-list {
  grid-area: TodoList;
  overflow-y: auto;
  max-height: 70vh;
  margin-top: 5em;
}

@media (min-width: 1100px) {
  .todo-list {
    padding-right: 1em;
  }
}
</style>

